// Priority icon function with static src and titles
export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority":
            return <img src='/HighPriority.svg' style={{ width: "14px", height: "14px", borderRadius: "100%" }} title="No Priority" />;
        case "Low":
            return <img src='/LowPriority.svg' style={{ width: "14px", height: "14px", borderRadius: "100%" }} title="Low Priority" />;
        case "Medium":
            return <img src='/MediumPriority.svg' style={{ width: "14px", height: "14px", borderRadius: "100%" }} title="Medium Priority" />;
        case "High":
            return <img src='/HighPriority.svg' style={{ width: "14px", height: "14px", borderRadius: "100%" }} title="High Priority" />;
        case "Urgent":
            return <img src='/UrgentPriority.svg' style={{ width: "14px", height: "14px", borderRadius: "100%" }} title="Urgent Priority" />;
        default:
            return <img src='/Backlog.svg' style={{ width: "14px", height: "14px", borderRadius: "100%" }} title="Backlog" />;
    }
}

// Status icon function with static src and titles
export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog":
            return <img src='/Backlog.svg' style={{ width: "16px", height: "16px", borderRadius: "100%" }} title="Backlog" />;
        case "Todo":
            return <img src='/To-do.svg' style={{ width: "16px", height: "16px", borderRadius: "100%" }} title="To-do" />;
        case "In progress":
            return <img src='/in-progress.svg' style={{ width: "16px", height: "16px", borderRadius: "100%" }} title="In Progress" />;
        case "Done":
            return <img src='/Done.svg' style={{ width: "16px", height: "16px", borderRadius: "100%" }} title="Done" />;
        case "Canceled":
            return <img src='/Cancelled.svg' style={{ width: "16px", height: "16px", borderRadius: "100%" }} title="Canceled" />;
        default:
            return <img src='/No-priority.svg' style={{ width: "16px", height: "16px", borderRadius: "100%" }} title="No Priority" />;
    }
}
