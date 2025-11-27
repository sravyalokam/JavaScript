const baseUrl = 'https://chorusqa.cogninelabs.com/api/staffx'
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InJ0c0ZULWItN0x1WTdEVlllU05LY0lKN1ZuYyIsImtpZCI6InJ0c0ZULWItN0x1WTdEVlllU05LY0lKN1ZuYyJ9.eyJhdWQiOiJhcGk6Ly9iZWZlOGI4Zi05NTZhLTQ3ZjMtYmE1NS03YzYxZTM2ZTkzZWIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zMDMzNjQyZC02YWRmLTRhYzYtYmJjNS01MTFiNDJiYzVmMDAvIiwiaWF0IjoxNzY0MDQ5MTM5LCJuYmYiOjE3NjQwNDkxMzksImV4cCI6MTc2NDA1MzQxNCwiYWNyIjoiMSIsImFpbyI6IkFYUUFpLzhhQUFBQWduekpJc29uVWNrMncrRlBNc3RLd3YwT2FpbUYzYmE3MkhiMUpvblBNQ3dIMGpJM25wbmUzRnQ3MHBLYnFvcEZrMUxENEJtTXIzUkI3M0dTeEhpRmpBVkFPYm91cDBRQWhpR0tQcFRONmtGMllpVExXU0w5ajU3SnR0VDlNcmJLeWhMNW92WFhsSlBZekZlT09MUjV3UT09IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBpZCI6ImJlZmU4YjhmLTk1NmEtNDdmMy1iYTU1LTdjNjFlMzZlOTNlYiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTG9rYW0iLCJnaXZlbl9uYW1lIjoiU3JhdnlhIiwiaXBhZGRyIjoiMTE1LjI0Ni4xOTcuNDMiLCJuYW1lIjoiU3JhdnlhIExva2FtIiwib2lkIjoiNjEyNDc1ODYtZGRmNy00ZGRhLWJmNTctM2ZkYmViN2I1ZDBhIiwicmgiOiIxLkFWWUFMV1F6TU45cXhrcTd4VkViUXJ4ZkFJLUxfcjVxbGZOSHVsVjhZZU51ay11ZkFLTldBQS4iLCJzY3AiOiJhcHAiLCJzaWQiOiIwMDk5NjFiOS0zZjE2LTY0MjEtMGVlMS0wMWNkZDcxM2JmYjQiLCJzdWIiOiI2TzkxZU02QTFmYmVLNFl5WVE5TFlBYW9oVF9Vd2lPMUtLQ1ZQemtfYk5nIiwidGlkIjoiMzAzMzY0MmQtNmFkZi00YWM2LWJiYzUtNTExYjQyYmM1ZjAwIiwidW5pcXVlX25hbWUiOiJzcmF2eWEubG9rYW1AY29nbmluZS5jb20iLCJ1cG4iOiJzcmF2eWEubG9rYW1AY29nbmluZS5jb20iLCJ1dGkiOiJZR1hRbk4xckdFYWxjNVJsWTJNbUFBIiwidmVyIjoiMS4wIiwieG1zX2Z0ZCI6IlhwREhEZG9kN05UYy1ZbXo5VndzT1hKcjNtcVowODB0UTdXZnl4b3pwT2tCYW1Gd1lXNWxZWE4wTFdSemJYTSJ9.WU4Udr2xvbsGzWEj8E3JQ4HHING_Gjihe3s7DAbGnjuaL8s_dzKW09aSbvuVcZjuMOGlnGmeSmIqiDBDtobYug4DV_K-lu-zkYGbe5s4M6h-Dsyc9IQW1pC79e5HqZFX3h37371okUEceSdaRyi7Zt1JlzJ88lyykFq2OSk6vb6IUQ51AYgftthl7E5nb_hQHOygEixbOHvio-wRuj6DUgTmRvfOdeg6-LHHe-OjcLYY7Af42j9D9MWry4b_csNzfgNV3Hbt82zEC_kBFPM6pypS4dq_97Sc26U98dpnxMJM4akpLq1fDe8qRN4L74Ku9eDXmFCxrWABgEM6kjBDiQ`

async function getRolesData() {
    try {
        const promise = await fetch(`${baseUrl}/employee-role-mappings/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await promise.json();
        const res = await console.log("Success", data);

        const items = data.items;
        const empWithPractices =  data.employees_with_practices;

        const newObj = new Map();

        items.forEach(item => {
            const {
                employee_id,
                employee_name,
                employee_email,
                role_display_name
            } = item;
        

            if(!newObj.has(employee_id)) {
                const empPracticeObj = empWithPractices.find((e) => e.employee_id == employee_id);
                const practices = empPracticeObj?empPracticeObj.practices.map((p) => p.practice_name) : [];

                newObj.set(
                    employee_id,{
                        emp_id : employee_id,
                        emp_name : employee_name,
                        emp_email : employee_email,
                        roleSet: [],
                        practices: practices
                    }
                )
            }

            const emp = newObj.get(employee_id);

            if(!emp.roleSet.includes(role_display_name)){
                emp.roleSet.push(role_display_name);
            }
        })

        console.log("FINAL RESULT:", Array.from(newObj.values()));
        return newObj;
        

    } catch (err) {
        console.log("Error:", err);
    }
}

getRolesData();
