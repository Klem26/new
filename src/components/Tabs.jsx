import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabsComponent({ children }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minWidth: 360,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            label="83 Followers"
            {...a11yProps(0)}
            sx={{
              color: "#000",
              fontWeight: "400",
              letterSpacing: "0px",
              textTransform: "none",
              padding: 0,

              fontSize: {
                mobile: "16px",
                tablet: "18px",
                laptop: "14px",
              },
              lineHeight: {
                mobile: "43px",
                laptop: "13px",
              },
              maxWidth: {
                laptop: "108px",
              },
            }}
          />
          <Tab
            label="4389 Following"
            {...a11yProps(1)}
            sx={{
              fontWeight: "400",
              letterSpacing: "0px",
              textTransform: "none",
              padding: 0,
              color: "#000",

              fontSize: {
                mobile: "16px",
                tablet: "18px",
                laptop: "14px",
              },
              lineHeight: {
                mobile: "43px",
                laptop: "13px",
              },
              maxWidth: {
                laptop: "108px",
              },
            }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {children}
      </TabPanel>
    </>
  );
}

export default TabsComponent;
