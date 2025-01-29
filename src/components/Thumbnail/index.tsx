type ThumbnailProps = {
  src: string;
  onClick: (src: string) => void;
};

export default function Thumbnail({ src, onClick }: ThumbnailProps) {
  return (
    <img
      className="z-20 h-auto max-h-[300px] w-full max-w-[300px] cursor-pointer"
      src={src}
      alt="flip"
      onClick={() => onClick(src)}
    />
  );
}
