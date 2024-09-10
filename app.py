from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os

# Initialize FastAPI
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

# Configure API key for Google Generative AI
genai.configure(api_key=API_KEY)

# Initialize the model and chat
model = genai.GenerativeModel("gemini-1.5-flash")
chat = model.start_chat()

# Define data models for request bodies
class SmallTalkRequest(BaseModel):
    input: str

class RelatableRequest(BaseModel):
    input: str

class FollowupRequest(BaseModel):
    input: str

class RemindRequest(BaseModel):
    input: str

class EmotionRequest(BaseModel):
    input: str

@app.post("/small_talk")
async def small_talk(request: SmallTalkRequest):
    small_talk = request.input
    response = chat.send_message(
        f"Like how a friend might answer with two-three random statements in a sentence that's related, no AI talk, don't ask followup questions: {small_talk}"
    )
    return {"text": response.text}

@app.post("/relatable")
async def relatable(request: RelatableRequest):
    relatable = request.input
    question_response = chat.send_message(
        f"based on the previous conversation, phrase this topic as statement and include the words: {relatable}"
    )
    response = chat.send_message(
        f"like how a close friend would say, with no questions Say a small statement about this: {relatable}"
    )
    return {"text": response.text, "question": question_response.text}

@app.post("/followup")
async def followup(request: FollowupRequest):
    followup = request.input


    response = chat.send_message(
        f"Like how a friend might answer with three random statements in a sentence, no AI talk, no follow up questions {followup}"
    )
    return {"text": response.text}

@app.post("/remind")
async def remind(request: RemindRequest):
    remind = request.input

    question_response = chat.send_message(
        f"based on the previous conversation, phrase this topic as statement and include the words: {remind}"
    )
    response = chat.send_message(
        f"Provide a brief followup statement, no questions, Your last statement reminds me of this: {remind}"
    )
    return {"text": response.text, "question": question_response.text}

@app.post("/emotion")
async def emotion(request: EmotionRequest):
    emotion = request.input
    question_response = chat.send_message(
        f"based on the previous conversation, phrase this topic as statement and include the words: {emotion}"
    )
    response = chat.send_message(
        f"Based on the last message, I feel this way, ask a question like how a friend would respond: {emotion}"
    )
    return {"text": response.text, "question": question_response.text}

@app.get("/repeat")
async def repeat():
    response = chat.send_message(
        f"Repeat Last Message"
    )
    return {"text": response.text}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
