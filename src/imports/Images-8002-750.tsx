import imgRectangle from "figma:asset/a1e67c5f897e8872a56eba14ce6f24ea5ac79ac1.png";

export default function Images() {
  return (
    <div className="relative size-full" data-name="IMAGES">
      <div className="absolute inset-[0_-0.4%_-0.4%_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}
