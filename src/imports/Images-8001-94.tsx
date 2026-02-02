import imgRectangle1 from "figma:asset/a1e67c5f897e8872a56eba14ce6f24ea5ac79ac1.png";
import { imgRectangle } from "./svg-xuv4n";

function Group() {
  return (
    <div className="absolute contents inset-[0_-0.4%_-0.4%_0]" data-name="Group">
      <div className="absolute inset-[0_-0.4%_-0.4%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[63.96px_149.58px] mask-size-[386.44px_218.7px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[29.45%_11.34%_27.5%_12.59%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Images() {
  return (
    <div className="relative size-full" data-name="IMAGES">
      <ClipPathGroup />
    </div>
  );
}