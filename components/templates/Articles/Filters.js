import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Close } from "@mui/icons-material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  backgroundColor: "#e4e4e7",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
    ...theme.applyStyles("dark", {
      background: "rgba(57,75,89,.5)",
    }),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 0 1px rgb(16 22 26 / 40%)",
    backgroundColor: "#394b59",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))",
  }),
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

function Filters({ setIsFiltersSidebarOpen }) {
  return (
    <div className="absolute top-0 right-0 w-80 h-screen p-4 overflow-auto md:p-0 md:h-auto md:w-auto md:overflow-hidden md:sticky md:top-24 space-y-3 text-[15px] bg-white">
      <div className="flex justify-between items-center mb-8 md:hidden">
        <p className="text-gray-900 text-[17px]">فیلتر مقالات</p>
        <span onClick={() => setIsFiltersSidebarOpen(false)}>
          <Close />
        </span>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 mb-2.5">تگ های محبوب</h4>
        <div className="flex gap-2 flex-wrap">
          <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-xl">
            # لاراول
          </div>
          <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-xl">
            # طراحی-وب
          </div>
          <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-xl">
            # جاوااسکریپت
          </div>
          <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-xl">
            # php
          </div>
          <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-xl">
            # ریکت
          </div>
          <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 rounded-xl">
            # وردپرس
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 rounded-xl px-3 py-2.5 flex justify-between items-center cursor-pointer text-gray-800 hover:text-primaryBlue transition-all">
          <div className="flex gap-1.5 items-center">
            <span>
              <GridViewOutlinedIcon fontSize="small" />
            </span>
            <h4>دسته‌بندی مقالات</h4>
          </div>
          <span>
            <ArrowForwardIosIcon fontSize="small" className="rotate-90" />
          </span>
        </div>
        <div className="bg-gray-100 rounded-xl mt-2 py-1">
          <RadioGroup
            defaultValue="all"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            className="-mr-3 -space-y-2"
          >
            <FormControlLabel
              value="all"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">همه</p>
              }
            />
            <FormControlLabel
              value="programming"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">
                  برنامه‌نویسی
                </p>
              }
            />
            <FormControlLabel
              value="wordpress"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">وردپرس</p>
              }
            />
            <FormControlLabel
              value="design"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">طراحی-وب</p>
              }
            />
            <FormControlLabel
              value="other"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">متفرقه</p>
              }
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default Filters;
