import { DialogContent, Typography } from "@material-ui/core";
import { useRef, useState } from "react";
import {
  Root,
  RPopconfirm,
  RDialog,
  RConfirmDialog,
  RPDialog,
  RGridImageGallery,
  RSecuredGridImageGallery,
  RSocialMedia,
  RFieldSet,
  RMenu,
} from "../components";
import { withRouterWithQuery } from "../hoc";

function TestPage(props) {
  const [open, setOpen] = useState(false);
  console.log("routes", props.routes);
  return (
    <Root>
      <center>
        <RSocialMedia />
        <RDialog
          anchorElement={<div>R Dialog</div>}
          buttons={[
            {
              label: "YES",
            },
            {
              label: "NO",
            },
            {
              label: "CANCEL",
              closeOnClick: true,
            },
          ]}
        >
          {(close) => <div>Hello R DIalog</div>}
        </RDialog>

        <button onClick={() => setOpen(true)}>Open Controlled Dialog</button>
        <RDialog controlled open={open} onClose={() => setOpen(false)}>
          <div>Controlled Dialog</div>
        </RDialog>

        <RConfirmDialog anchorElement={<div>R Confirm Dialog</div>} />

        <RDialog.CustomDialog anchorElement={<div>Custom Dialog</div>}>
          {({ close }) => (
            <DialogContent>
              <h1>Ok</h1>
            </DialogContent>
          )}
        </RDialog.CustomDialog>

        <RPopconfirm
          anchorElement={<div> R Pop Confirm</div>}
          message="Do pariatur tempor velit laboris amet aliquip incididunt minim elit aliqua laborum ut ipsum. Minim adipisicing exercitation non veniam dolore enim labore consectetur cupidatat nisi irure. Voluptate non nulla dolore tempor tempor exercitation tempor veniam commodo in irure voluptate. Adipisicing minim irure sit enim commodo in non quis esse nisi dolore."
          title="Title"
        />

        <RGridImageGallery
          spaceProps={{
            justify: "center",
          }}
        />

        <div>
          <button
            onClick={() => {
              RPDialog.openConfirmDialog({
                title: "MyTitle",
                customUI: ({ close }) => {
                  return <div onClick={close}>Open Dialog With Custom UI</div>;
                },
              });
            }}
          >
            Programatically Open
          </button>
        </div>

        <RSecuredGridImageGallery
          spaceProps={{
            justify: "center",
          }}
        />

        <RFieldSet legendText="Test Label">
          <div>Hello dear</div>
        </RFieldSet>

        <RMenu anchorElement={<div>Test</div>}>
          {({handleClose})=>(
            <div>
            <RMenu.Item onClick={()=>handleClose()}>Menu1</RMenu.Item>
            <RMenu.Item>Menu2</RMenu.Item>
            <RMenu.Item>Menu3</RMenu.Item>
            <RMenu.Item>Menu4</RMenu.Item>
            </div>
          )}
        </RMenu>
      </center>
    </Root>
  );
}

export default withRouterWithQuery(TestPage);