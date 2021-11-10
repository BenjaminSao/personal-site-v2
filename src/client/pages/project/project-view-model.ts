import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import { Routes } from "../routes";
import "./project-view.scss";
import * as Chart from "chart.js";

@template(require("./project-view.html"))
@route(Routes.project)
export class ProjectViewModel extends PageViewModel
{
    
    protected onMount(element: HTMLElement)
    {
        super.onMount(element);
        
        const programmingLanguageChart = document.getElementById("programming-language-chart") as HTMLCanvasElement; 
        
        new Chart.Chart(programmingLanguageChart, {
            type: "doughnut",
            data: {
                labels: [
                    "JavaScript",
                    "Python",
                    "CSS"
                ],
                datasets: [{
                    label: "My First Dataset",
                    data: [37, 36, 24],
                    backgroundColor: [
                        "#EA899E",
                        "#4C77B0",
                        "#8D68A8"
                    ],
                    hoverOffset: 4
                }]
            },
            options:
            {
                plugins: {
                    legend: {
                        position: "bottom",
                        
                    }
                }
            }
        });
        
        // new Chart.Chart(projectStatsChart, {
        //     type: "radar",
        //     data: {
        //         labels: [
        //             "Eating",
        //             "Drinking",
        //             "Sleeping",
        //             "Designing",
        //             "Coding",
        //             "Cycling",
        //             "Running"
        //         ],
        //         datasets: [{
        //             label: "My First Dataset",
        //             data: [65, 59, 90, 81, 56, 55, 40],
        //             fill: true,
        //             backgroundColor: "rgba(255, 99, 132, 0.2)",
        //             borderColor: "rgb(255, 99, 132)",
        //             pointBackgroundColor: "rgb(255, 99, 132)",
        //             pointBorderColor: "#fff",
        //             pointHoverBackgroundColor: "#fff",
        //             pointHoverBorderColor: "rgb(255, 99, 132)"
        //         }, {
        //             label: "My Second Dataset",
        //             data: [28, 48, 40, 19, 96, 27, 100],
        //             fill: true,
        //             backgroundColor: "rgba(54, 162, 235, 0.2)",
        //             borderColor: "rgb(54, 162, 235)",
        //             pointBackgroundColor: "rgb(54, 162, 235)",
        //             pointBorderColor: "#fff",
        //             pointHoverBackgroundColor: "#fff",
        //             pointHoverBorderColor: "rgb(54, 162, 235)"
        //         }]
        //         },
        //     options: {
        //         elements: {
        //             line: {
        //                 borderWidth: 3
        //             }
        //         }
        //     },
        // })
    }
}