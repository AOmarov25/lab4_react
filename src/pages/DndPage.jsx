// src/pages/DndPage.jsx
/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
function DndPage() {
    const [columns, setColumns] = useState({
        todo: {
            name: 'To Do',
            items: [
                { id: '1', content: 'First task' },
                { id: '2', content: 'Second task' },
            ],
        },
        inProgress: {
            name: 'In Progress',
            items: [],
        },
    });
    const onDragEnd = (result, columns, setColumns) => {
        const { source, destination } = result;
        if (!destination) return;
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        if (source.droppableId === destination.droppableId) {
            sourceItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
            });
        } else {
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        }
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%'
        }}>

            <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',  
                                alignItems: 'center',
                                margin: '0 20px',
                            }}
                            key={columnId}
                        >
                            <h2>{column.name}</h2>
                            <Droppable droppableId={columnId} key={columnId}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                padding: 4,
                                                width: 250,
                                                minHeight: 500,
                                            }}
                                        >
                                            {column.items.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => {
                                                        return (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect: 'none',
                                                                    padding: 16,
                                                                    margin: '0 0 8px 0',
                                                                    minHeight: '50px',
                                                                    backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                                    color: 'white',
                                                                    ...provided.draggableProps.style,
                                                                }}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        );
                                                    }}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
}

export default DndPage;*/

// src/pages/DndPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function DndPage() {
    const [columns, setColumns] = useState({
        todo: {
            name: 'To Do',
            items: [
                { id: '1', content: 'First task' },
                { id: '2', content: 'Second task' },
            ],
        },
        inProgress: {
            name: 'In Progress',
            items: [],
        },
        done: {
            name: 'Done',
            items: [],
        },
        blocked: {
            name: 'Blocked',
            items: [],
        },
    });

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        if (source.droppableId === destination.droppableId) {
            const column = columns[source.droppableId];
            const newItems = Array.from(column.items);
            const [removed] = newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, removed);

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: newItems,
                },
            });
        } else {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = Array.from(sourceColumn.items);
            const destItems = Array.from(destColumn.items);
            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        }
    };

    const handleDelete = (columnId, itemIndex) => {
        const newColumns = { ...columns };
        newColumns[columnId].items.splice(itemIndex, 1);
        setColumns(newColumns);
    };

    return (
        <div className="mainf" style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
            <Link to="/lab4_react">Go to usual To-Do List</Link>
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.entries(columns).map(([columnId, column]) => (
                    <div className="columnes" key={columnId} style={{ margin: '0 20px' }}>
                        <h2>{column.name}</h2>
                        <Droppable droppableId={columnId}>
                            {(provided, snapshot) => (
                                <div className="test"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{
                                        background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                        padding: 4,
                                        width: 250,
                                        minHeight: 500,
                                    }}>
                                    {column.items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        userSelect: 'none',
                                                        padding: 16,
                                                        margin: '0 0 8px 0',
                                                        minHeight: '50px',
                                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                                        color: 'white',
                                                        ...provided.draggableProps.style,
                                                    }}>
                                                    {item.content}
                                                    <button className="dndbutton" onClick={() => handleDelete(columnId, index)}>Delete</button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </DragDropContext>
        </div>
    );
}

export default DndPage;