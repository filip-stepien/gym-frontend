import { Button, Progress } from "antd";
import { IdcardOutlined } from "@ant-design/icons";

export function Membership() {
  return (
    <div className="bg-card shadow-md p-5 h-auto w-1/2 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <IdcardOutlined className="text-lg" />
        <h2 className="text-lg font-semibold">Membership</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="flex flex-col justify-center">
          <p className="text-gray-500 text-sm">Type</p>
          <p className="text-3xl">Standard</p>
        </div>

        <div className="flex justify-content items-center">
          <Progress
            type="circle"
            percent={75}
            format={() => "30 days left"}
            strokeColor="#007bff"
            size={125}
          />
        </div>

        <div className="col-5 flex flex-col pt-3">
          <div>
            <p className="text-gray-500 text-m">Last Payment</p>
            <p className="font-semibold text-xl">01.01.2025</p>
            <p className="text-gray-500 text-m">Valid Until</p>
            <p className="font-semibold text-xl">20.02.2025</p>
          </div>
        </div>
          <div className="flex gap-2 items-center justify-end col-5">
            <Button type="primary" className="bg-blue-500">Extend</Button>
            <Button>Show Details</Button>
          </div>
        </div>
      </div>
  );
}
