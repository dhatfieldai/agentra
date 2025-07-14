export default function FeatureSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
        <p className="text-gray-600 mb-10">Explore the intelligent modules powering AURORA9’s agentic AI eCommerce workflows.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Predictive Risk Forecaster</h3>
            <p className="text-sm text-gray-600">Anticipates threats before they affect your listings.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">AI-Driven Product Innovation</h3>
            <p className="text-sm text-gray-600">Uses LLMs to design ROI-positive concepts in crowded markets.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Autonomous Mode</h3>
            <p className="text-sm text-gray-600">Executes and optimizes operations without human intervention.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
