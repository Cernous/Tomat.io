from googleapiclient.discovery import build
import os
from dotenv import load_dotenv
from youtube_transcript_api import YouTubeTranscriptApi
load_dotenv()
__TOKEN = os.getenv("YT_PI_KEY")

def search_youtube_videos(query, max_results=3):
    youtube = build("youtube", "v3", developerKey=__TOKEN)

    request = youtube.search().list(
        q=query,
        part="id,snippet",
        type="video",
        maxResults=max_results
    )

    response = request.execute()

    videos = []
    for item in response.get("items", []):
        video_id = item["id"]["videoId"]
        title = item["snippet"]["title"]
        link = f"https://www.youtube.com/watch?v={video_id}"
        videos.append({"title": title, "link": link, "video_id": video_id})
    return videos

def get_video_id(video_list):
    vid = []
    for video in video_list:
        vid.append(video['video_id'])
    return vid

def get_transcript(video_id):
    text: str = ""
    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    for entry in transcript:
        text.append(entry['text'])
    return text


