import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MonthCardContent = ({ data }) => {
  const { t } = useTranslation("ship12");

  return (
    <div className="mt-8">
      {data.image ? (
        <>
          <Image
            src={data.image}
            alt={data.description}
            className="mx-auto mb-4"
            width={500}
            height={300}
          />
          <p className="text-gray-700 mb-4">{data.description}</p>
          <Link href={data.link} legacyBehavior>
            <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
              {t("monthCard.visitSite")}
            </a>
          </Link>
        </>
      ) : (
        <p className="text-blue-500">{t("monthCard.comingSoon")}</p>
      )}
    </div>
  );
};

export default MonthCardContent;
