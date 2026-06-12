import OpportunityCard from './OpportunityCard';

export default function OpportunityList({ opportunities }) {
  if (!opportunities || opportunities.length === 0) {
    return <p className="text-center mt-5">No opportunities found. Try adjusting your search! 🕵️‍♀️</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {opportunities.map((opp) => (
        <div className="col" key={opp.id}>
          <OpportunityCard opportunity={opp} />
        </div>
      ))}
    </div>
  );
}
