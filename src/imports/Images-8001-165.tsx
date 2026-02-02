import imgRectangle1 from "figma:asset/538b8df7fbe764dcea459218c961793ed26d8976.png";
import { imgRectangle } from "./svg-mbtdk";

function Group() {
  return (
    <div className="absolute contents inset-[0_1.21%_1.21%_0]" data-name="Group">
      <div className="absolute inset-[0_1.21%_1.21%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[86.21px_203.42px] mask-size-[386.44px_218.7px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[37.21%_13.53%_22.78%_15.77%]" data-name="Clip path group">
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