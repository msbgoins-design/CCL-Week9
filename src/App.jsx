
import { useState, useEffect } from 'react';
import OpportunityList from './OpportunityList';
import FilterPanel from './FilterPanel';
import AddOpportunityForm from './AddOpportunityForm';
import MyOpportunities from './MyOpportunities';

function App() {
	// --- STATE MANAGEMENT ---
	const [opportunities, setOpportunities] = useState([]);       
  
	// Local Storage initialized state
	  // Local Storage initialized state with 20 Seeded Columbus Opportunities
  const [myOpportunities, setMyOpportunities] = useState(() => {
    const saved = localStorage.getItem('myCustomOpps');
    if (saved && JSON.parse(saved).length > 0) return JSON.parse(saved);

    // Default mock database of local Columbus opportunities
    return [
      {
        id: 1,
        title: "Volunteer Intake Coordinator",
        organization: { name: "COPAW (Central Ohio Pet Animal Welfare)" },
        description: "Help coordinate intake logistics, greet fosters, and manage records for our veterinary clinic and rescue operations.",
        location: "Columbus, OH",
        dates: "2026-06-15",
        activities: [{ category: "Environmental" }],
        url: "https://copaw.org"
      },
      {
        id: 2,
        title: "Columbus Arts Festival Info Booth",
        organization: { name: "Greater Columbus Arts Council" },
        description: "Welcome guests, distribute maps, and answer questions during the city's largest downtown summer arts festival.",
        location: "Columbus, OH",
        dates: "2026-06-12",
        activities: [{ category: "PR, Fundraising, Events" }],
        url: "https://www.columbusartsfestival.org"
      },
      {
        id: 3,
        title: "Trap-Neuter-Return (TNR) Assistant",
        organization: { name: "Columbus Colony Cats" },
        description: "Assist with the safe trapping, transport, and monitoring of local feral cat colonies to help manage community populations.",
        location: "Columbus, OH",
        dates: "2026-06-20",
        activities: [{ category: "Environmental" }],
        url: "https://colonycats.org"
      },
      {
        id: 4,
        title: "Community Garden Planter",
        organization: { name: "Franklin Park Conservatory" },
        description: "Get your hands dirty! We need volunteers to help weed, plant new summer blooms, and maintain the community outreach gardens.",
        location: "Columbus, OH",
        dates: "2026-06-18",
        activities: [{ category: "Environmental" }],
        url: "https://www.fpconservatory.org"
      },
      {
        id: 5,
        title: "Tech Event Registration Team",
        organization: { name: "Ohio X" },
        description: "Network with the local tech community by checking in attendees, distributing badges, and directing foot traffic at our summer summit.",
        location: "Columbus, OH",
        dates: "2026-07-10",
        activities: [{ category: "PR, Fundraising, Events" }],
        url: "https://www.ohiox.org"
      },
      {
        id: 6,
        title: "ComFest Recycling & Cleanup Crew",
        organization: { name: "Community Festival (ComFest)" },
        description: "Keep Goodale Park beautiful by helping sort recycling, manage waste stations, and clean up the grounds during the festival.",
        location: "Columbus, OH",
        dates: "2026-06-26",
        activities: [{ category: "Environmental" }],
        url: "https://www.comfest.com"
      },
      {
        id: 7,
        title: "Summer Reading Buddy",
        organization: { name: "Columbus Metropolitan Library" },
        description: "Read with elementary school students to help prevent the 'summer slide' and encourage a lifelong love of reading.",
        location: "Columbus, OH",
        dates: "2026-06-22",
        activities: [{ category: "Education, Language, and Art" }],
        url: "https://www.columbuslibrary.org/volunteer"
      },
      {
        id: 8,
        title: "Urban Farming Assistant",
        organization: { name: "Franklinton Farms" },
        description: "Help harvest fresh produce, turn compost, and pack CSA boxes for local families in the Franklinton area.",
        location: "Columbus, OH",
        dates: "2026-06-25",
        activities: [{ category: "Environmental" }],
        url: "https://franklintonfarms.org"
      },
      {
        id: 9,
        title: "Feline Socialization & Care",
        organization: { name: "Cat Welfare Association" },
        description: "Spend time socializing shy shelter cats, brushing them, and providing enrichment to prepare them for their forever homes.",
        location: "Columbus, OH",
        dates: "2026-07-05",
        activities: [{ category: "Environmental" }],
        url: "https://catwelfareassoc.org"
      },
      {
        id: 10,
        title: "Jazz & Rib Fest Beverage Tent",
        organization: { name: "Columbus Recreation and Parks" },
        description: "Pour drinks, handle transactions, and keep the crowds moving at the downtown riverfront Jazz & Rib Fest.",
        location: "Columbus, OH",
        dates: "2026-07-17",
        activities: [{ category: "PR, Fundraising, Events" }],
        url: "https://www.hotribscooljazz.org"
      },
      {
        id: 11,
        title: "Guest Chef Program",
        organization: { name: "Ronald McDonald House Charities" },
        description: "Gather a small group to plan, purchase, and prepare a home-cooked dinner for families staying at the house.",
        location: "Columbus, OH",
        dates: "2026-07-02",
        activities: [{ category: "Social Care" }],
        url: "https://rmhc-centralohio.org"
      },
      {
        id: 12,
        title: "Youth Coding Mentor",
        organization: { name: "Color Coded Labs Outreach" },
        description: "Assist lead instructors in teaching basic HTML, CSS, and JavaScript concepts to high school students in an after-school bootcamp.",
        location: "Columbus, OH",
        dates: "2026-08-01",
        activities: [{ category: "Education, Language, and Art" }],
        url: "https://colorcodedlabs.com"
      },
      {
        id: 13,
        title: "Trail Restoration Team",
        organization: { name: "Columbus Metro Parks" },
        description: "Clear brush, lay down fresh gravel, and repair trail markers at Highbanks Metro Park.",
        location: "Columbus, OH",
        dates: "2026-07-08",
        activities: [{ category: "Environmental" }],
        url: "https://www.metroparks.net"
      },
      {
        id: 14,
        title: "Food Pantry Distribution",
        organization: { name: "St. Stephen's Community House" },
        description: "Sort donated canned goods, stock shelves, and help local Linden residents navigate the choice food pantry.",
        location: "Columbus, OH",
        dates: "2026-06-29",
        activities: [{ category: "Social Care" }],
        url: "https://www.saintstephensch.org"
      },
      {
        id: 15,
        title: "Dublin Irish Festival Cultural Ambassador",
        organization: { name: "City of Dublin" },
        description: "Assist with cultural stage presentations, VIP seating, and managing the children's activity zones.",
        location: "Dublin, OH",
        dates: "2026-07-31",
        activities: [{ category: "PR, Fundraising, Events" }],
        url: "https://dublinirishfestival.org"
      },
      {
        id: 16,
        title: "Fresh Produce Sorter",
        organization: { name: "Mid-Ohio Food Collective" },
        description: "Inspect and sort thousands of pounds of fresh apples, potatoes, and carrots for distribution to local pantries.",
        location: "Grove City, OH",
        dates: "2026-07-12",
        activities: [{ category: "Program Support" }],
        url: "https://mofc.org"
      },
      {
        id: 17,
        title: "Scioto River Sweep",
        organization: { name: "Keep Columbus Beautiful" },
        description: "Grab a trash picker and some gloves! We are walking the banks of the Scioto River to clear out plastics and debris.",
        location: "Columbus, OH",
        dates: "2026-07-15",
        activities: [{ category: "Environmental" }],
        url: "https://www.columbus.gov"
      },
      {
        id: 18,
        title: "Gallery Guide",
        organization: { name: "Columbus Museum of Art" },
        description: "Help direct visitors during free Sunday admission days, protect the art, and answer basic wayfinding questions.",
        location: "Columbus, OH",
        dates: "2026-06-21",
        activities: [{ category: "Education, Language, and Art" }],
        url: "https://www.columbusmuseum.org"
      },
      {
        id: 19,
        title: "Rescue Transport Driver",
        organization: { name: "Ohio SPCA" },
        description: "Drive a climate-controlled van to transport at-risk dogs and cats from rural county shelters to central Ohio rescues.",
        location: "Columbus, OH",
        dates: "2026-07-09",
        activities: [{ category: "Environmental" }],
        url: "https://www.ohiospca.org"
      },
      {
        id: 20,
        title: "Event Setup & Tear Down",
        organization: { name: "Columbus Gives Back" },
        description: "Join our rapid-response team to assemble pop-up tents, tables, and signage for various downtown weekend charity 5Ks.",
        location: "Columbus, OH",
        dates: "2026-07-25",
        activities: [{ category: "PR, Fundraising, Events" }],
        url: "https://columbusgivesback.org"
      }
    ];
  }); 
  
	const [searchTerm, setSearchTerm] = useState('');             
	const [selectedCategory, setSelectedCategory] = useState('All'); 
	const [selectedLocation, setSelectedLocation] = useState('All'); 
  
	const [loading, setLoading] = useState(true); 
	const [page, setPage] = useState(1); 

	// --- 1. FETCH API DATA (WITH PAGINATION) ---
	const fetchOpportunities = async (pageNumber = 1, append = false) => {
		setLoading(true); 
		try {
			const response = await fetch(`https://www.volunteerconnector.org/api/search/?page=${pageNumber}`);
			const data = await response.json();
      
			if (append) {
				setOpportunities((prevValues) => [...prevValues, ...data.results]);
			} else {
				setOpportunities(data.results);
			}
		} catch (error) {
			console.error('Error fetching volunteer data:', error);
		} finally {
			setLoading(false); 
		}
	};

	// Run fetch on initial load
	useEffect(() => {
		fetchOpportunities(1, false);
	}, []);

	// Automatically sync custom opportunities to localStorage
	useEffect(() => {
		localStorage.setItem('myCustomOpps', JSON.stringify(myOpportunities));
	}, [myOpportunities]);

	// --- 2. HANDLERS ---
	const handleLoadMore = () => {
		const nextPage = page + 1;
		setPage(nextPage);
		fetchOpportunities(nextPage, true); 
	};

	const handleManualRefresh = () => {
		window.location.reload();
	};

	const handleAddOpportunity = (newOpp) => {
		setMyOpportunities([newOpp, ...myOpportunities]);
	};

	const handleDeleteOpportunity = (idToDelete) => {
		setMyOpportunities(myOpportunities.filter(opp => opp.id !== idToDelete));
	};

	// --- 3. FILTERING LOGIC ---
	const filteredOpportunities = opportunities.filter((opp) => {
		const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase());
    
		const matchesCategory = selectedCategory === 'All' || opp.activities?.some(
			(act) => act.category === selectedCategory
		);

		const matchesLocation = selectedLocation === 'All' || 
			(selectedLocation === 'Remote' && opp.remote_or_online) ||
			(opp.location?.toLowerCase().includes(selectedLocation.toLowerCase())) ||
			(opp.audience?.regions?.[0]?.toLowerCase().includes(selectedLocation.toLowerCase()));

		return matchesSearch && matchesCategory && matchesLocation;
	});

	// Apply the search term to your saved custom opportunities too!
	const filteredMyOpportunities = myOpportunities.filter((opp) => {
		return opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
					 (opp.organization?.name && opp.organization.name.toLowerCase().includes(searchTerm.toLowerCase()));
	});

	return (
		<div className="container my-4">
			{/* HEADER WITH NEON GLOW */}
			<header className="mb-4 position-relative text-center">
				<h1 className="fw-bold" style={{ color: '#2c3e50', textShadow: '0 0 10px rgba(0, 243, 255, 0.6)' }}>
					Volunteer Dashboard 🌍
				</h1>
				<button 
					className="btn btn-outline-info fw-bold position-absolute top-0 end-0" 
					style={{ boxShadow: '0 0 8px rgba(0, 243, 255, 0.4)' }}
					onClick={handleManualRefresh}
				>
					🔄 Refresh Data
				</button>
			</header>

			{/* SEARCH & FILTER */}
			<FilterPanel 
				setSearchTerm={setSearchTerm} 
				setSelectedCategory={setSelectedCategory} 
				setSelectedLocation={setSelectedLocation} 
			/>

			{/* FORM TO ADD OPPORTUNITIES */}
			<AddOpportunityForm onAdd={handleAddOpportunity} />

			{/* SAVED OPPORTUNITIES WITH DELETE BUTTON (Now uses the filtered list) */}
			<MyOpportunities 
				myOpportunities={filteredMyOpportunities} 
				onDelete={handleDeleteOpportunity} 
			/>

			<hr className="my-5" />

			{/* MAIN API DATA GRID */}
			<main className="mt-5">
				<h3 className="mb-4">Available Positions ({filteredOpportunities.length})</h3>
        
				<OpportunityList opportunities={filteredOpportunities} />

				{/* GLOWING LOADING SPINNER OR LOAD MORE BUTTON */}
				{loading ? (
					<div className="text-center my-4">
						<div className="spinner-border text-info" role="status" style={{ boxShadow: '0 0 10px rgba(0, 243, 255, 0.4)', borderRadius: '50%' }}>
							<span className="visually-hidden">Loading...</span>
						</div>
						<p className="mt-2 text-muted">Loading opportunities...</p>
					</div>
				) : (
					<div className="text-center my-5">
						<button 
							className="btn btn-info btn-lg fw-bold shadow-sm px-5 text-white" 
							style={{ boxShadow: '0 0 15px rgba(0, 243, 255, 0.6)' }}
							onClick={handleLoadMore}
						>
							➕ Load More Opportunities
						</button>
					</div>
				)}
			</main>

			{/* FOOTER */}
			<footer className="text-center mt-5 py-4 text-muted border-top">
				<p className="mb-0">© 2026 Volunteer Dashboard. Built for community impact. 🤝</p>
			</footer>
		</div>
	);
}

export default App;
