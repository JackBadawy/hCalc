import { Monoton } from "next/font/google";
import { Fascinate_Inline } from "next/font/google";
type SubHeadingProps = {
  txt: string;
};
const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: ["400"],
});

const SubHeading: React.FC<SubHeadingProps> = ({ txt }) => {
  return (
    <div className="flex bg-hpal-200 z-10">
      <span className="flex border-[4px] border-hpal-500 rounded-full p-[2px] bg-hpal-200 z-10">
        <span className="flex border-[4px] border-hpal-500 rounded-full p-[2px]">
          <span className="flex border-[4px] border-hpal-500 rounded-full p-[2px]">
            <h2
              className={
                fascinateInline.className +
                " bg-hpal-200 px-3 text-4xl font-extrabold text-hpal-500 border-[5px] border-hpal-500 rounded-full"
              }
            >
              {txt}
            </h2>
          </span>
        </span>
      </span>
    </div>
  );
};
export default SubHeading;
