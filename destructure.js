const api1 = 'http://localhost:3000/employees';
const api2 = 'http://localhost:3000/projects';
const api3 = 'http://localhost:3000/departments';

async function destructureData() {
    try{
        const promise = await Promise.all([
            fetch(api1),
            fetch(api2),
            fetch(api3)
        ]);

        const data = await Promise.all(promise.map(res => res.json()));

        const [employees, projects, departments] = data;

        const resultSet = new Map();

        employees.forEach(({ id, name, email }) => {
            const empProjects = projects.filter(p => p.employee_id === Number(id)).map(p => p.project_name);
            const empDepartments = departments.filter(d => d.employee_id === Number(id)).map(d => d.department);

            resultSet.set(name, {
                emp_id: id,
                emp_name: name,
                emp_email: email,
                projects: empProjects,
                departments: empDepartments
            });
        });

        console.log("FINAL RESULT:", Array.from(resultSet.values()));
        return resultSet;
    }
    catch(err) {
        console.log("Error", err);
    }
}

destructureData();


// async function runPromiseRace() {
//     try {
//         const fastest = await Promise.race([
//             fetch(api1),
//             fetch(api2),
//             fetch(api3)
//         ]);

//         const data = await fastest.json();
//         console.log("PROMISE RACE RESULT:", data);
//     }
//     catch (error) {
//         console.log("RACE ERROR:", error);
//     }
// }

// runPromiseRace();

// async function runPromiseAllSettled() {
//     const result = await Promise.allSettled([
//         fetch(api1),
//         fetch(api2),
//         fetch(api3)
//     ]);

//     console.log("ALL SETTLED RESULT:", result);

//     result.forEach((res, index) => {
//         if (res.status === "fulfilled") {
//             console.log(`API ${index + 1} SUCCESS`);
//         } else {
//             console.log(`API ${index + 1} FAILED`);
//         }
//     });
// }

// runPromiseAllSettled();

// async function runPromiseAny() {
//     try {
//         const firstSuccess = await Promise.any([
//             fetch(api1),
//             fetch(api2),
//             fetch(api3)
//         ]);

//         const data = await firstSuccess.json();
//         console.log("ANY RESULT :", data);
//     }
//     catch (error) {
//         console.log("ANY ERROR — All promises failed:", error);
//     }
// }

// runPromiseAny();


