from googleapiclient.discovery import build
from chatgptapi import nam_Dish
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

if __name__ == "__main__":
    keyword = nam_Dish
    results = search_youtube_videos(keyword)

    # 创建一个包含标题和链接的字符串列表
    video_list = [f"{video['title']} ({video['link']})" for video in results]

