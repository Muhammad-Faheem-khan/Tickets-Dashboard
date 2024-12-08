import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { DeleteFilled, EditFilled, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { dummyTicketsData, TableColumns } from "../../utils/constants";
import { DeleteTicketModal } from "../../components/modals/deleteTicketModal";
import { AddTicketModal } from "../../components/modals/addUpdateTicket";

const TicketMenu = () => {
  const [rowData, setRowData] = useState(dummyTicketsData);
  const [deleteModal, setDeleteModal] = useState(false);
  const [ticketModal, setTicketModal] = useState(false);
  const [ticketModalType, setTicketModalType] = useState("add");
  const [selectedTicket, setSelectedTicket] = useState(false);

  const handleAdd = () => {
    setSelectedTicket(null);
    setTicketModalType("add");
    toggleTicketModal();
  };

  const handleEditClick = (data) => {
    setSelectedTicket(data);
    setTicketModalType("edit");
    toggleTicketModal();
  };

  const handleUpdateTicket = (data, type) => {
    if (type === "edit") {
      const updatedTickets = rowData.map((ticket) =>
        ticket.id === selectedTicket.id ? { ...rowData, ...data } : ticket,
      );
      setRowData(updatedTickets);
    } else {
      data["assignedBy"] = "Adam Fard";
      const newTicketWithId = { ...data, id: rowData.length + 1 };
      setRowData((prev) => [newTicketWithId, ...prev]);
    }
    setSelectedTicket(null);
    toggleTicketModal();
    setTicketModalType("add");
  };

  const toggleTicketModal = () => {
    setTicketModal((prev) => !prev);
  };

  const toggleDeleteModal = (data) => {
    if (data) setSelectedTicket(data);
    setDeleteModal((prev) => !prev);
  };

  const handleDelete = () => {
    const updatedTickets = rowData.filter(
      (ticket) => ticket.id !== selectedTicket.id,
    );
    setSelectedTicket(null);
    setRowData(updatedTickets);
    setDeleteModal(false);
  };

  const onClose = () => {
    setSelectedTicket(null);
    setTicketModalType("add");
  };

  const ActionButtons = (props) => {
    return (
      <div className="flex items-center justify-center space-x-4">
        <button
          className="flex items-center justify-center text-blue-600 hover:bg-blue-100 p-2 rounded transition"
          onClick={() => handleEditClick(props.data)}
        >
          <EditFilled style={{ fontSize: "18px" }} />
        </button>
        <span className="text-gray-400">|</span>
        <button
          className="flex items-center justify-center text-red-600 hover:bg-red-100 p-2 rounded transition"
          onClick={() => toggleDeleteModal(props.data)}
        >
          <DeleteFilled style={{ fontSize: "18px" }} />
        </button>
      </div>
    );
  };

  const columns = [
    ...TableColumns,
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 100,
      maxWidth: 120,
      cellRenderer: ActionButtons,
    },
  ];

  return (
    <div>
      <DeleteTicketModal
        toggleModal={toggleDeleteModal}
        onConfirm={handleDelete}
        modal={deleteModal}
        onClose={onClose}
      />

      <AddTicketModal
        toggleModal={toggleTicketModal}
        onConfirm={handleUpdateTicket}
        modal={ticketModal}
        type={ticketModalType}
        ticket={selectedTicket}
        onClose={onClose}
      />
      <div className="flex justify-between items-center px-2 mt-2 mb-4">
        <h1 className="text-secondary text-2xl">Daily Tickets</h1>
        <Button
          type="primary"
          className="bg-primary customOKButton mt-2 flex items-center"
          onClick={handleAdd}
        >
          <PlusOutlined />
          Add Ticket
        </Button>
      </div>
      <div className="ag-theme-quartz" style={{ height: 519, width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
      </div>
    </div>
  );
};

export default TicketMenu;
