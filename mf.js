const organization = {
  name: "NextGen Tech",
  headquarters: "Bangalore",
  divisions: [
    {
      divisionName: "Product Development",
      manager: { name: "Arjun", gender: "male", role: "Division Manager" },
      units: [
        {
          unitName: "Mobile Apps",
          supervisor: { name: "Neha", gender: "female", role: "Supervisor" },
          staff: [
            {
              id: 101,
              name: "Amit",
              gender: "male",
              role: "iOS Developer",
              skills: ["Swift", "UIKit", "Xcode"],
              contact: { email: "amit@nextgen.com", phone: "9001122334" },
              assignments: [
                { project: "Finance App", status: "ongoing", deadline: "2 months" },
                { project: "Health Tracker", status: "completed", deadline: "1 month" }
              ]
            },
            {
              id: 102,
              name: "Ritika",
              gender: "female",
              role: "Android Developer",
              skills: ["Kotlin", "Jetpack", "Firebase"],
              contact: { email: "ritika@nextgen.com", phone: "9002233445" },
              assignments: [
                { project: "E-commerce App", status: "ongoing", deadline: "3 months" }
              ]
            }
          ]
        },
        {
          unitName: "Web Platform",
          supervisor: { name: "Siddharth", gender: "male", role: "Supervisor" },
          staff: [
            {
              id: 103,
              name: "Megha",
              gender: "female",
              role: "Frontend Developer",
              skills: ["React", "Redux", "CSS"],
              contact: { email: "megha@nextgen.com", phone: "9003344556" },
              assignments: [
                { project: "Landing Page Redesign", status: "completed", deadline: "1 month" }
              ]
            },
            {
              id: 104,
              name: "Vikram",
              gender: "male",
              role: "Backend Developer",
              skills: ["Node.js", "Express", "MongoDB"],
              contact: { email: "vikram@nextgen.com", phone: "9004455667" },
              assignments: [
                { project: "API Gateway", status: "ongoing", deadline: "2 months" }
              ]
            }
          ]
        }
      ]
    },
    {
      divisionName: "Human Resources",
      manager: { name: "Sanya", gender: "female", role: "Division Manager" },
      units: [
        {
          unitName: "Recruitment",
          supervisor: { name: "Ramesh", gender: "male", role: "Supervisor" },
          staff: [
            {
              id: 201,
              name: "Priya",
              gender: "female",
              role: "Recruiter",
              skills: ["Screening", "Interviewing", "Onboarding"],
              contact: { email: "priya@nextgen.com", phone: "9005566778" },
              assignments: [
                { project: "Graduate Hiring", status: "ongoing", deadline: "3 months" }
              ]
            },
            {
              id: 202,
              name: "Anil",
              gender: "male",
              role: "Recruiter",
              skills: ["Interviewing", "Reference Checks"],
              contact: { email: "anil@nextgen.com", phone: "9006677889" },
              assignments: [
                { project: "Lateral Hiring", status: "completed", deadline: "1 month" }
              ]
            }
          ]
        },
        {
          unitName: "Employee Engagement",
          supervisor: { name: "Tanvi", gender: "female", role: "Supervisor" },
          staff: [
            {
              id: 203,
              name: "Raghav",
              gender: "male",
              role: "Coordinator",
              skills: ["Event Planning", "Communication"],
              contact: { email: "raghav@nextgen.com", phone: "9007788990" },
              assignments: [
                { project: "Team Building Workshop", status: "completed", deadline: "1 month" }
              ]
            },
            {
              id: 204,
              name: "Isha",
              gender: "female",
              role: "Coordinator",
              skills: ["Surveys", "Employee Feedback"],
              contact: { email: "isha@nextgen.com", phone: "9008899001" },
              assignments: [
                { project: "Annual Engagement Survey", status: "ongoing", deadline: "2 months" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// console.log(organization);

function mapMaleAndFemale(organization) {
    const male = [];
    const female = [];

    organization.divisions?.forEach(division => {
        
        const manager = division?.manager;
        if (manager?.name && manager?.gender) {
            manager.gender.toLowerCase() === 'female' 
                ? female.push({ name: manager.name })
                : male.push({ name: manager.name });
        }

        division.units?.forEach(unit => {
            const supervisor = unit?.supervisor;
            if (supervisor?.name && supervisor?.gender) {
                supervisor.gender.toLowerCase() === 'female' 
                    ? female.push({ name: supervisor.name })
                    : male.push({ name: supervisor.name });
            }


            const staff = unit?.staff || [];
            const femaleStaff = staff
                .filter(member => member?.name && member?.gender?.toLowerCase() === 'female')
                .map(member => ({ name: member.name }));

            const maleStaff = staff
                .filter(member => member?.name && member?.gender?.toLowerCase() === 'male')
                .map(member => ({ name: member.name }));

            female.push(...femaleStaff);
            male.push(...maleStaff);
        });
    });

    return { male, female };
}

const result = mapMaleAndFemale(organization);
console.log(result);
