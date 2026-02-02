import imgRectangle from "figma:asset/beec4ba6ac4eebd728b995c425b72de9b7d569ed.png";

export default function Text() {
  return (
    <div className="relative size-full" data-name="TEXT">
      <div className="absolute inset-[0_14.99%_14.99%_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}