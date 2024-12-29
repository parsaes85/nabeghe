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

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1d4ed8",
        ...theme.applyStyles("dark", {
          backgroundColor: "#1d4ed8",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

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

function Filters() {
  return (
    <div className="sticky top-24 space-y-3 text-[15px]">
      <div>
        <h4 className="font-bold text-gray-900 mb-2.5">جستجوی دوره</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="عنوان دوره..."
            className="bg-gray-100 rounded-xl px-3 py-2.5 w-full"
          />
          <span className="absolute left-3 top-2 text-gray-500">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl px-3 py-2.5 flex justify-between items-center cursor-pointer">
        <h4 className="font-bold text-gray-900">درحال برگزاری</h4>
        <AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
      </div>
      <div>
        <div className="bg-gray-100 rounded-xl px-3 py-2.5 flex justify-between items-center cursor-pointer text-gray-800 hover:text-primaryBlue transition-all">
          <div className="flex gap-1.5 items-center">
            <span>
              <StarBorderIcon />
            </span>
            <h4>نوع دوره</h4>
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
              value="free"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">رایگان</p>
              }
            />
            <FormControlLabel
              value="money"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">نقدی</p>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <div className="border-t pt-3">
        <div className="bg-gray-100 rounded-xl px-3 py-2.5 flex justify-between items-center cursor-pointer text-gray-800 hover:text-primaryBlue transition-all">
          <div className="flex gap-1.5 items-center">
            <span>
              <GridViewOutlinedIcon fontSize="small" />
            </span>
            <h4>دسته‌بندی دوره</h4>
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
              value="wordpress"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">وردپرس</p>
              }
            />
            <FormControlLabel
              value="laravel"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">لاراول</p>
              }
            />
            <FormControlLabel
              value="javascript"
              control={<BpRadio />}
              label={
                <p className="font-Yekan text-[15px] text-gray-500">
                  جاوااسکریپت
                </p>
              }
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default Filters;
