from googleapiclient.discovery import build
from chatgptapi import nam_Dish




def search_youtube_videos(query, max_results=3):
    """
    使用 YouTube Data API 搜索视频
    :param query: 搜索关键词
    :param max_results: 返回视频数量
    :return: 视频标题和链接列表
    """
    # 构建 API 服务
    youtube = build("youtube", "v3", developerKey=API_KEY)

    # 调用 API 的搜索方法
    request = youtube.search().list(
        q=query,
        part="id,snippet",
        type="video",  # 搜索类型为视频
        maxResults=max_results
    )

    # 执行请求并获取响应
    response = request.execute()

    # 提取视频标题和链接
    videos = []
    for item in response.get("items", []):
        video_id = item["id"]["videoId"]
        title = item["snippet"]["title"]
        link = f"https://www.youtube.com/watch?v={video_id}"
        videos.append({"title": title, "link": link})

    return videos

# 测试
if __name__ == "__main__":
    keyword = nam_Dish
    results = search_youtube_videos(keyword)

    print("\n搜索结果:")
    for i, video in enumerate(results, start=1):
        print(f"{i}. {video['title']} ({video['link']})")
