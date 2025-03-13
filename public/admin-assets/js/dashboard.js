// Tasks Per Project Chart
const tasksPerProjectCtx = document
    .getElementById("tasksPerProjectChart")
    .getContext("2d");
new Chart(tasksPerProjectCtx, {
    type: "bar",
    data: {
        labels: tasksPerProject.map((item) => item.project),
        datasets: [
            {
                label: "Completed Tasks",
                data: tasksPerProject.map((item) => item.completed_tasks),
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Tasks Completed Per Project",
            },
        },
    },
});
