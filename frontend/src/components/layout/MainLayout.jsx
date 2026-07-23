import Header from "./Header";
import ComplaintForm from "../complaint/ComplaintForm";
import AssistantPanel from "../assistant/AssistantPanel";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-[1600px] mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-8">
            <ComplaintForm />
          </section>

          <section className="col-span-4">
            <AssistantPanel />
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;