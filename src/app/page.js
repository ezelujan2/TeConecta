import ServiceForm from "@/components/serviceForm";

export default function Home() {
  return (
    <div className="flex flex-row">
      <img
        src="https://res.cloudinary.com/dmoqzhgjk/image/upload/v1697202116/rocco-stoppoloni-4ZDaW06UJ80-unsplash_lagfbp.jpg"
        alt="honda"
        class="w-3/4 h-[100vh] rounded-xl"
      />
      <ServiceForm></ServiceForm>
    </div>
  );
}
