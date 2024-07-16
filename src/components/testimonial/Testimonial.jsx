import { useContext } from "react";
import myContext from "../../context/data/myContext";
// import rajan from "../img/rajan.png";
// import rajan from "../img/rajan.jpg";
// import rajan from "../";
function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="">
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            हमारे सफल ग्राहक
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            <span className=" text-purple-500">
              ऑनलाइन दुकान: तेज़ और आसान डिलीवरी!
            </span>{" "}
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <a href="https://www.instagram.com/rajankushwaha2.o?igsh=MTV4eGNmdmp1cXludA==">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="./img/rajan1.jpg"
                  />
                </a>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  मेरी ऑनलाइन दुकान ने मुझे अपने नजदीकी स्टोर से तेजी से
                  प्रोडक्ट्स डिलीवर करने का सुनहरा अवसर दिया। यह स्वाभाविक,
                  आसान, और अद्भुत है।
                </p>
                <span className="inline-block h-1 w-12 rounded bg-green-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Rajan Kushwaha
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  React Developer
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <a href="#">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src=""
                  />
                </a>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  मैंने इस ऑनलाइन दुकान का इस्तेमाल किया और मुझे उनकी तेजी और
                  सुरक्षित डिलीवरी की सुविधा बहुत पसंद आई। यह सचमुच आसान और सहज
                  है।
                </p>
                <span className="inline-block h-1 w-12 rounded bg-green-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  UI Develeoper
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <a href="https://www.instagram.com/_keshaw11?igsh=bTZ0cW51ZTJkYXBv">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="./img/keshaw.jpg"
                  />
                </a>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  मैंने अपने उत्कृष्ट उत्पादों को इस ऑनलाइन दुकान के माध्यम से
                  तेजी से प्राप्त किया और उससे मुझे बहुत अच्छा अनुभव हुआ। यह
                  स्वाभाविक और सुरक्षित है।
                </p>
                <span className="inline-block h-1 w-12 rounded bg-green-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
