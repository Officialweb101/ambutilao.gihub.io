const explanations = {
    includes1: "This line includes the iostream library, which is used for input and output operations.",
    includes2: "This line includes the vector library, which is used to handle dynamic arrays.",
    includes3: "This line includes the iomanip library, which is used for manipulating the output format.",
    includes4: "This line includes the algorithm library, which provides the max() function used to determine the maximum of two values.",
    namespace: "This line declares that the program will use the standard namespace, so you don't have to prefix standard library names with 'std::'.",
    struct: "This structure holds information about each process, including its ID, arrival time, burst time, completion time, waiting time, and turnaround time.",
    id: "This line declares an integer variable id to store the process ID.",
    arrivalTime: "This line declares an integer variable arrivalTime to store the arrival time of the process.",
    burstTime: "This line declares an integer variable burstTime to store the burst time of the process.",
    completionTime: "This line declares an integer variable completionTime to store the completion time of the process.",
    waitingTime: "This line declares an integer variable waitingTime to store the waiting time of the process.",
    turnaroundTime: "This line declares an integer variable turnaroundTime to store the turnaround time of the process.",
    mainStart: "This line starts the main function, where the program execution begins.",
    numProcesses: "This line declares an integer variable numProcesses to store the number of processes.",
    coutNumProcesses: "This line prompts the user to enter the number of processes.",
    cinNumProcesses: "This line reads the number of processes entered by the user.",
    vectorProcesses: "This line creates a vector of Process structures to hold the information for each process.",
    forLoopInput: "This line starts a loop to get the arrival and burst times for each process from the user.",
    processId: "This line assigns a unique ID to each process.",
    coutProcessId: "This line prints the process ID.",
    coutArrivalTime: "This line prompts the user to enter the arrival time for the current process.",
    cinArrivalTime: "This line reads the arrival time entered by the user.",
    coutBurstTime: "This line prompts the user to enter the burst time for the current process.",
    cinBurstTime: "This line reads the burst time entered by the user.",
    forLoopCalc: "This line starts a loop to calculate the completion time, turnaround time, and waiting time for each process.",
    startTimeCalc: "This line calculates the start time of the current process based on the current time and its arrival time.",
    completionTimeCalc: "This line calculates the completion time of the current process.",
    turnaroundTimeCalc: "This line calculates the turnaround time of the current process.",
    waitingTimeCalc: "This line calculates the waiting time of the current process.",
    updateCurrentTime: "This line updates the current time to the completion time of the current process.",
    coutTableHeader: "This line prints the table headers for the process information.",
    forLoopDisplay: "This line starts a loop to print the information for each process.",
    coutProcessIdDisplay: "This line prints the ID of the current process.",
    coutArrivalTimeDisplay: "This line prints the arrival time of the current process.",
    coutBurstTimeDisplay: "This line prints the burst time of the current process.",
    coutCompletionTimeDisplay: "This line prints the completion time of the current process.",
    coutTurnaroundTimeDisplay: "This line prints the turnaround time of the current process.",
    coutWaitingTimeDisplay: "This line prints the waiting time of the current process.",
    totalTimesInit: "This line initializes variables to calculate the total waiting time and total turnaround time.",
    forLoopTotalTimes: "This line starts a loop to calculate the total waiting time and total turnaround time.",
    totalWaitingTimeCalc: "This line adds the waiting time of the current process to the total waiting time.",
    totalTurnaroundTimeCalc: "This line adds the turnaround time of the current process to the total turnaround time.",
    coutAvgWaitingTime: "This line prints the average waiting time.",
    coutAvgTurnaroundTime: "This line prints the average turnaround time.",
    coutGanttChartHeader: "This line prints the header for the Gantt chart.",
    coutGanttChartSpace: "This line prints a space before the Gantt chart.",
    forLoopGanttChart: "This line starts a loop to print the Gantt chart.",
    coutGanttChartSeparator: "This line prints a separator for the Gantt chart.",
    coutGanttChartStart: "This line prints the start of the Gantt chart.",
    forLoopGanttChartIds: "This line starts a loop to print the process IDs in the Gantt chart.",
    coutGanttChartId: "This line prints the ID of the current process in the Gantt chart.",
    coutGanttChartSpaceEnd: "This line prints a space after the Gantt chart.",
    forLoopGanttChartEnd: "This line starts a loop to print the end of the Gantt chart.",
    coutGanttChartSeparatorEnd: "This line prints a separator for the end of the Gantt chart.",
    coutGanttChartNewline: "This line moves the cursor to the next line after printing the Gantt chart.",
    forLoopGanttChartTimes: "This line starts a loop to print the completion times of each process in the Gantt chart.",
    coutGanttChartStartTime: "This line prints the start time of the current process in the Gantt chart.",
    updateCurrentTimeGantt: "This line updates the current time to the completion time of the current process for the Gantt chart.",
    return0: "This line indicates that the program has finished successfully and returns 0 to the operating system."
};

function explainSection(section) {
    const explanation = explanations[section];
    document.getElementById('explanation').innerHTML = explanation ? explanation : 'Explanation not available.';
}

function exportCode() {
    const code = document.getElementById('code-block').innerText;
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'process_scheduling.cpp';
    link.click();
}
