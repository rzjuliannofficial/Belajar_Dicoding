import React from 'react';
import NoteItem from './NoteItem';

const getGroupKey = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month}-${year}`;
};

const formatGroupHeader = (groupKey) => {
  const [month, year] = groupKey.split('-');
  return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
};

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list', searchKeyword }) {
  const hasNotes = notes && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan
        </p>
      </div>
    );
  }

  const groups = {};
  const groupOrder = [];

  notes.forEach((note) => {
    const key = getGroupKey(note.createdAt);
    if (!groups[key]) {
      groups[key] = [];
      groupOrder.push(key);
    }
    groups[key].push(note);
  });

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {groupOrder.map((groupKey) => {
        const groupNotes = groups[groupKey];
        return (
          <section key={groupKey} data-testid={`${groupKey}-group`} className="notes-group">
            <div className="notes-group__header">
              <h3 className="notes-group__title">{formatGroupHeader(groupKey)}</h3>
              <span data-testid={`${groupKey}-group-count`} className="notes-group__count">
                {groupNotes.length} catatan
              </span>
            </div>
            <div className="notes-group__items">
              {groupNotes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  searchKeyword={searchKeyword}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default NotesList;
