export default function LevelBadge({ level }) {
    const levelConfig = {
        Warga: {
            text: 'Warga',
            gradientStart: '#EEA849',
            gradientEnd: '#F46B45',
            background: '#FEFBF6',
        },
        Juragan: {
            text: 'Juragan Text',
            gradientStart: '#56CCF2',
            gradientEnd: '#2F80ED',
            background: '#F6FCFE',
        },
        Sultan: {
            text: 'Sultan Text',
            gradientStart: '#38EF7D',
            gradientEnd: '#11998E',
            background: '#F6FEF9',
        },
        Konglomerat: {
            text: 'Konglomerat Text',
            gradientStart: '#E100FF',
            gradientEnd: '#7F00FF',
            background: '#FEF5FF',
        },
    };

    const levelConfigObj = levelConfig[level];

    if (!levelConfigObj) {
        console.error(`Invalid level: ${level}`);
        return null;
    }

    const badgeStyle = {
        padding: '8px 24px',
        borderRadius: '8px',
        backgroundImage: `linear-gradient(to right, ${levelConfigObj.gradientStart}, ${levelConfigObj.gradientEnd})`,
        color: 'transparent',
        backgroundClip: 'text',
        display: 'inline-block',
        WebkitBackgroundClip: 'text',
    };

    const containerStyle = {
        background: levelConfigObj.background,
        display: 'inline-block',
    };

    return (
        <span className=" rounded-lg" style={containerStyle}>
            <span style={badgeStyle}>{levelConfigObj.text}</span>
        </span>
    );
}
