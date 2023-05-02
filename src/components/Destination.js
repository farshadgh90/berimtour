import DestinationData from "./DestinationData";
import pic1 from "../assets/6.jpg";
import pic2 from "../assets/7.jpg";
import pic3 from "../assets/8.jpg";
import pic4 from "../assets/9.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>مقصدهای محبوب</h1>
      <p>
        تورها به شما این فرصت را می دهند که در یک بازه زمانی چیزهای زیادی را
        ببینید
      </p>
      <DestinationData
        className="first-des"
        heading="آبشار زال"
        text="آبشار زال که با نام های آبشار زال دره بابل و زال دره سوادکوه شناخته می شود در غرب شیرگاه، جنوب غربی قائمشهر و جنوب شرقی بابل واقع شده است، برای رسیدن به این محل صعب العبور و البته فوق بکر، نیاز به یک ساعت پیاده روی در مسیرهای جنگل و پر چالش خواهید داشت که برای این امر نیاز به تجهیزات مناسب از جمله آشنایی به اصول مسیریابی جنگلی، کفش های خوب و خوراکی دارید، این مکان در لیست بهترین آبشارهای مازندران قرار ندارد که علت آن دسترسی سخت برای طبیعت گردهاست"
        img1={pic1}
        img2={pic2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="روستای فیلبند"
        text="روستای فیلبند از زیباترین روستاهای مرتفع در استان مازندران است. این روستا به ‌دلیل موقعیت جغرافیایی ویژه‌اش و قرار گرفتن در ارتفاع کوهپایه‌ای، چشم‌اندازی زیبا به مراتع و روستاهای اطراف دارد. روستای فیلبند با طبیعت بکر و زیبایش در نیمی از سال با ابرها احاطه می‌شود و طبیعتا دوستان زیادی در فصل گرم به این منطقه خوش آب و هوا سفر می‌کنند. دریای ابر فیلبند در بیشتر روزهای سال تشکیل می‌شود؛ تماشای حرکت ابرها از میان پاها و احاطه شدن در توده‌های ابر، لحظات به‌یادماندنی برای گردشگران خلق می‌کنند"
        img1={pic3}
        img2={pic4}
      />
    </div>
  );
};

export default Destination;