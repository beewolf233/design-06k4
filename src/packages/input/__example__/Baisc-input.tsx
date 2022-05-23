import React from "react";
import KInput from "../Input";

export default () => (
  <>
    <br />
    <KInput placeholder="placeholder"
      style={{ width: '350px', margin: '12px' }} />
    <br />
    <KInput placeholder="large input"
      prefixIcon="user"
      size="large"
      style={{ width: '350px', margin: '12px' }} />
    <KInput
      placeholder="middle input"
      prefixIcon="user"
      style={{ width: '350px', margin: '12px' }} />
    <KInput
      placeholder="small input"
      prefixIcon="user"
      size="small"
      style={{ width: '350px', margin: '12px' }} />
    <KInput
      placeholder="small input"
      addonBefore="https://"
      style={{ width: '350px', margin: '12px' }} />
    <KInput
      size="small"
      placeholder="small input"
      addonBefore="https://"
      style={{ width: '350px', margin: '12px' }} />
    <KInput
      size="large"
      placeholder="small input"
      addonBefore="https://"
      style={{ width: '350px', margin: '12px' }} />
  </>
)