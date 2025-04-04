import { RiseOutlined } from "@ant-design/icons";

export function ProgressOverview() {
  return (
    <div className="bg-card shadow-md p-5 h-44 w-1/2 flex flex-col">

      <div className="flex items-center gap-2">
        <RiseOutlined className="text-blue-500 text-lg" />
        <h2 className="text-lg font-semibold">Progress Overview</h2>
      </div>

      <div className="grid grid-cols-2 gap-y-1">
        <div>
          <p className="text-gray-500 text-xs ">Weekly Total Sets</p>
          <p className="text-2xl font-bold mb-1">86</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Weekly Session Volume</p>
          <p className="text-2xl font-bold mb-1">32,893 kg</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-1 mt-auto">
        <div className="flex items-center gap-1">
          <p className="text-gray-500 text-xs">since last week</p>
          <p className="text-green-500 text-xs font-bold flex items-center">
            <RiseOutlined className="mr-0.5" /> 10%
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray-500 text-xs">since last week</p>
          <p className="text-green-500 text-xs font-bold flex items-center">
            <RiseOutlined className="mr-0.5" /> 12.5%
          </p>
        </div>
      </div>
    </div>
  );
}