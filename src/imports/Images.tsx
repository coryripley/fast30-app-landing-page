import imgRectangle1 from "figma:asset/1d2efbdbd9ecd021efcdceb1a3fa35218864604a.png";
import { imgRectangle } from "./svg-2yivo";

function Group() {
  return (
    <div className="absolute contents inset-[0_-0.14%_2.06%_0]" data-name="Group">
      <div className="absolute inset-[0_-0.14%_2.06%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[62.71px_12.79px] mask-size-[1200px_1138.42px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[1.11%_9.29%_0_4.5%]" data-name="Clip path group">
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
