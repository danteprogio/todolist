import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBValidationItem,
  MDBValidation,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { updateTask } from "../restAPI/TodoAPI";

const EditTaskComponent = ({ taskid }) => {
  const [basicModal, setBasicModal] = useState("");
  const toggleOpen = () => setBasicModal(!basicModal);
  const [updatetask, setupdatetask] = useState("");

  const updateTaskToTheList = () => {
    if (updatetask !== "") {
      updateTask(taskid, "task", updatetask).then((value) => {
        setBasicModal(!basicModal);
      });
    }
  };

  return (
    <>
      <MDBBtn rippleColor="dark" type="submit" onClick={toggleOpen}>
        <MDBIcon icon="pencil" />
      </MDBBtn>

      <MDBModal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Task</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBValidation className="row g-3" isValidated>
                <MDBValidationItem>
                  <MDBInput
                    name="fname"
                    required
                    label="Edit Task"
                    onChange={(e) => setupdatetask(e.target.value)}
                  />
                </MDBValidationItem>
              </MDBValidation>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn onClick={() => updateTaskToTheList()}>
                Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default EditTaskComponent;
