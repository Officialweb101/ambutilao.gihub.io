const explanations = {
    includes1: "This line includes the iostream library, which is used for input and output operations.",
    includes2: "This line includes the vector library, which is used to handle dynamic arrays.",
    includes3: "This line includes the iomanip library, which is used for manipulating the output format.",
    namespace: "This line declares that the program will use the standard namespace, so you don't have to prefix standard library names with 'std::'.",
    struct: "This structure holds information about each process, including its ID, arrival time, burst time, start time, end time, waiting time, and turnaround time.",
    id: "This line declares an integer variable id to store the process ID.",
    arrivalTime: "This line declares an integer variable arrivalTime to store the arrival time of the process.",
    burstTime: "This line declares an integer variable burstTime to store the burst time of the process.",
    startTime: "This line declares an integer variable startTime to store the start time of the process.",
    endTime: "This line declares an integer variable endTime to store the end time of the process.",
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
    forLoopCalc: "This line starts a loop to calculate the start time, waiting time, turnaround time, and end time for each process.",
    ifFirstProcess: "This line checks if the current process is the first process.",
    startTimeFirst: "This line sets the start time of the first process to its arrival time.",
    elseOtherProcesses: "This line starts the else block for processes other than the first one.",
    startTimeOther: "This line sets the start time of the current process to the maximum of its arrival time and the end time of the previous process.",
    waitingTimeCalc: "This line calculates the waiting time of the current process.",
    turnaroundTimeCalc: "This line calculates the turnaround time of the current process.",
    endTimeCalc: "This line calculates the end time of the current process.",
    coutTableHeader: "This line prints the table headers for the process information.",
    forLoopDisplay: "This line starts a loop to print the information for each process.",
    coutProcessIdDisplay: "This line prints the ID of the current process.",
    coutArrivalTimeDisplay: "This line prints the arrival time of the current process.",
    coutBurstTimeDisplay: "This line prints the burst time of the current process.",
    coutWaitingTimeDisplay: "This line prints the waiting time of the current process.",
    coutTurnaroundTimeDisplay: "This line prints the turnaround time of the current process.",
    coutStartTimeDisplay: "This line prints the start time of the current process.",
    coutEndTimeDisplay: "This line prints the end time of the current process.",
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
    forLoopGanttChartTimes: "This line starts a loop to print the start times of each process in the Gantt chart.",
    coutGanttChartStartTime: "This line prints the start time of the current process in the Gantt chart.",
    coutGanttChartEndTime: "This line prints the end time of the last process in the Gantt chart.",
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