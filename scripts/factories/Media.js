class MediaFactory {
    constructor(data, photographer, type) {
      if (type == "picture") return Picture(data, photographer);
      else if (type == "video") return Video(data, photographer);
    }
  }