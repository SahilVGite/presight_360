import { useRouter } from "next/router";
import PageHero from "../../../components/common/PageHero";
import { careerFormBannerBg } from "../../../assets/images";
import { JOBS_DATA } from "../../../constants/careersData";
import CareerApplyFormSection from "../../../components/careers/CareerApplyFormSection";

export default function CareerApply() {
  const { id } = useRouter().query;
  const job = JOBS_DATA.find((j) => j.id === parseInt(id));

  return (
    <>
      <PageHero
        bgImage={careerFormBannerBg}
        title={job ? job.title.toUpperCase() : "APPLY NOW"}
        subtitle="Fill the form below. Our team will get in touch with you shortly. Contact our support team in case of any difficulty."
      />
      <CareerApplyFormSection />
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} }
}
