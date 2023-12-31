import { useState } from "react";

export default function Player({
    initialName,
    symbol,
    isActive,
    onPlayerNameChange,
}) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onPlayerNameChange(symbol, name);
        }
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    let playerName = <span className="player-name">{name}</span>;
    let btnCaption = "Edit";
    if (isEditing) {
        playerName = (
            <input type="text" required value={name} onChange={handleChange} />
        );
        btnCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}
