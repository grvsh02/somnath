
const avatarFillColors = [
    "#6EE7B7",
    "#34D399",
    "#10B981",
    "#047857",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#FDA4AF",
    "#FB7185",
    "#F43F5E",
    "#BE123C",
    "#FCD34D",
    "#FBBF24",
    "#F59E0B",
    "#D97706",
    "#94A3B8",
    "#64748B",
    "#475569",
];

export const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarFillColors.length);
    return {
        fill_color: avatarFillColors[randomIndex],
        text_color: "#F8FAFC",
        img_url: "",
    };
}

export const defaultUserAvatarFill = {
    fillColor: 'rgba(253, 230, 138, 1)',
    textColor: '#F59E0B',
};
