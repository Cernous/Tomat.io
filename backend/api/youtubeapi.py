from googleapiclient.discovery import build
import os
from dotenv import load_dotenv
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
        videos.append({"title": title, "link": link})

    return videos


