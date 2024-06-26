import { leetcode } from "../../../../images";
const Leetcode = ({ leetCode }) => {
  return (
    <div className="ring-1 ring-highlight rounded-md relative">
      <p className="font-montserrat font-semibold font-9xl text-yellow-500 ml-4 px-2 absolute top-[-12px] bg-primary">
        Leetcode
      </p>
      <div className="flex items-center">
        <div className="grid grid-cols-2 gap-6 py-4 px-10 w-full flex-1">
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">User Id</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{leetCode.UserID}</p>
            </div>
            <div className="text-white flex">
              <span className="font-semibold flex-1">Ranking</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{leetCode.Ranking}</p>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-2">
            <div className="text-white flex">
              <span className="font-semibold flex-1">
                Total Question Solved
              </span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{leetCode.TotalQuestionSolver}</p>
            </div>
            <div className="text-white flex ml-4">
              <span className="font-semibold flex-1">Easy</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{leetCode.Easy}</p>
            </div>
            <div className="text-white flex ml-4">
              <span className="font-semibold flex-1">Medium</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{leetCode.Medium}</p>
            </div>
            <div className="text-white flex ml-4">
              <span className="font-semibold flex-1">Hard</span>
              <span className="font-semibold flex-none"> :</span>
              <p className="ml-2 flex-1">{leetCode.Hard}</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[130px] h-[130px] flex-none rounded-md overflow-hidden mr-3">
          <img src={leetcode} className="bg-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
