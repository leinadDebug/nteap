import ReadyToGetStarted from "./ready-To-Get-Started";

export default function Read_To_Get_Started() {
  return (
    <section className="relative my-10 sm:my-16">
      <div className="relative">
        {/* Top green background */}
        <div className="bg-green-500 rounded-tl-[50%] rounded-tr-[5%] sm:rounded-tr-[2%] min-h-[220px] sm:min-h-[312px]">
          {/* Content card */}
          <div className="absolute z-50 -top-8 sm:-top-10 inset-x-0 px-4 sm:px-0">
            <ReadyToGetStarted />
          </div>
        </div>

        {/* White rounded bottom */}
        <div className="bg-white rounded-tl-[100%] rounded-tr-[5%] sm:rounded-tr-[2%] absolute bottom-0 w-full min-h-[80px] sm:min-h-[100px] z-40"></div>
      </div>
    </section>
  );
}
