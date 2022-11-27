# Create Project <Badge type="tip" text="v1" vertical="middle" />

> Description: Create a new project requirement work order.

## Request

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 740px;" colspan="2">Facts</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td style="font-weight: 600; width: 25%;">HTTP URL</td>
    <td>
      https://${HOST}/api/v1/project
    </td>
  </tr>
  <tr>
    <td style="font-weight: 600;">HTTP Method</td>
    <td style="font-size: 12px;">
      <span style="border: 1px solid; background-color: rgb(255,239,219); color: rgb(255,165,0); box-sizing: border-box; padding: 3px 8px; font-weight: 500; border-radius: 2px; line-height: 22px;">
        POST
      </span>
    </td>
  </tr>
  <tr>
    <td style="font-weight: 600;">API Type</td>
    <td>
      <div style="margin: 1px 0 2px; background: rgba(52,199,36,.2); color: #2ea121; font-size: 12px; line-height: 20px; padding: 0 6px; align-items: center; border-radius: 2px; display: inline-flex;">
        <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 12 12">
          <path d="M5.998 11.49A5.491 5.491 0 115.997.507a5.491 5.491 0 01.001 10.983z" fill="#2EA121"></path>						<path d="M8.768 5.373a.69.69 0 00-.002-.975.689.689 0 00-.975-.003L5.346 6.84 4.204 5.698a.687.687 0 00-.972.006.686.686 0 00-.006.97c.589.588 1.178 1.175 1.765 1.765a.501.501 0 00.71 0c1.02-1.026 2.045-2.045 3.067-3.066z" fill="#fff"></path>
        </svg>
        <span style="font-weight: 500; margin-left: 6px;">
          OpenAPI
        </span>
      </div>
    </td>
  </tr>
</tbody>
</table>

### Request header

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 12.5%;">Type</th>
    <th style="width: 12.5%;">Required</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Authorization</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <b>Value format:&nbsp;</b>"Bearer&nbsp;<code>access_token</code>"<br/>
      <b>Example value:&nbsp;</b>"Bearer t-yti4mda1zdktn5zxcvzm1nztaxzgjk"
    </td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>string</td>
    <td>No</td>
    <td><b>Fixed value:&nbsp;</b>"application/json; charset=utf-8"</td>
  </tr>
</tbody>
</table>

### Request body

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<!-- 层级标识：padding-left 2em/4em/6em -->
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 12.5%;">Type</th>
    <th style="width: 12.5%;">Required</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>project</td>
    <td>object</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Top level Object<br/>
      For more information, see the Sample of api request body content.
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟id</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Project id
      </span><br/>
      <b>Example: </b>"29"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟name</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Project name
      </span><br/>
      <b>Example: </b>"CNPEK006北京太古里三里屯盈科中心新建项目"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟type</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Project type
      </span><br/>
      <b>Example: </b>"construction"<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>construction</code><br/>
      &ensp;• <code>reconstruction</code><br/>
      &ensp;• <code>expansion</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟desc</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Project desc
      </span><br/>
      <b>Example: </b>"无"<br/>
      <b>Default value: </b>""
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟site</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (site information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟name</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Site name
      </span><br/>
      <b>Example: </b>"盈科中心"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟code</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Site code
      </span><br/>
      <b>Example: </b>"CNPEK006"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟count</td>
    <td>number</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Site count
      </span><br/>
      <b>Example: </b>2748
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟size</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Site size
      </span><br/>
      <b>Example: </b>"medium"<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>small</code><br/>
      &ensp;• <code>medium</code><br/>
      &ensp;• <code>large</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟order</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (work order information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟plat</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Order platform
      </span><br/>
      <b>Example: </b>"jira"<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>jira</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟code</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Order code
      </span><br/>
      <b>Example: </b>"IT-9828511"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟url</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Order url
      </span><br/>
      <b>Example: </b>"https://help.example.net/browse/IT-9828511"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟contact</td>
    <td>object{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Nested Object (personnel contact information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟delivery</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (delivery person information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟name_en</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      English name
      </span><br/>
      <b>Example: </b>"Hanchi Gu"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟name_zh</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Chinese name
      </span><br/>
      <b>Example: </b>"顾翰池"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟email</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Email address
      </span><br/>
      <b>Example: </b>"hanchi.gu@mail.com"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟phone</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Phone number
      </span><br/>
      <b>Example: </b>"13340961855"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟pmo</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (pmo person information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟name_en</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      English name
      </span><br/>
      <b>Example: </b>"Xiaoyu"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟name_zh</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Chinese name
      </span><br/>
      <b>Example: </b>"萧羽"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟email</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Email address
      </span><br/>
      <b>Example: </b>"xiaoyu@mail.com"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟phone</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Phone number
      </span><br/>
      <b>Example: </b>"13600894279"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟date</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (date information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟expected</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Expected delivery date
      </span><br/>
      <b>Example: </b>"2022-09-09"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟deadline</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Deadline date
      </span><br/>
      <b>Example: </b>"2022-09-23"
    </td>
  </tr>
  <tr>
    <td>logistic</td>
    <td>object</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Top level Object<br/>
      For more information, see the Sample of api request body content.
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟position</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (destination location information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟country</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Country
      </span><br/>
      <b>Fixed value: </b>"中国大陆"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟country_code</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Country code
      </span><br/>
      <b>Fixed value: </b>"CN"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟province</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Province
      </span><br/>
      <b>Example: </b>"北京"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟city</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      City
      </span><br/>
      <b>Example: </b>"北京市"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟city_code</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      City code (airport code)
      </span><br/>
      <b>Example: </b>"PEK"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟address</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Shipping specific address
      </span><br/>
      <b>Example: </b>"朝阳区工人体育场北路甲2号"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟receiver</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (recipient information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟name</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Chinese name
      </span><br/>
      <b>Example: </b>"孟嘉运"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟phone</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Phone number
      </span><br/>
      <b>Example: </b>"18546842277"
    </td>
  </tr>
  <tr>
    <td>devices</td>
    <td>object</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Top level Object<br/>
      For more information, see the Sample of api request body content.
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟gateway</td>
    <td>object[]</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Device role Object (gateway)<br/>
      For the definitions of types, refer to Member object description.
      </span><br/>
      <b>Default value: </b>[]
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟dnss</td>
    <td>object[]</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Device role Object (dnss)<br/>
      For the definitions of types, refer to Member object description.
      </span><br/>
      <b>Default value: </b>[]
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟nss</td>
    <td>object[]</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Device role Object (nss)<br/>
      For the definitions of types, refer to Member object description.
      </span><br/>
      <b>Default value: </b>[]
    </td>
  </tr>
</tbody>
</table>

### Member object description

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 12.5%;">Type</th>
    <th style="width: 12.5%;">Required</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>gateway | dnss | nss</td>
    <td>object[]</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Device role Object
      </span><br/>
      <b>Enum keys are: </b><br/>
      &ensp;• <code>gateway</code><br/>
      &ensp;• <code>dnss</code><br/>
      &ensp;• <code>nss</code><br/>
      <span style="color: DimGray;">
      Empty arrays are allowed, but the k-v must exist!
      </span><br/>
      <b>Default value: </b>[]
    </td>
  </tr>
  <tr>
    <td>- member</td>
    <td>member</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      The following is one of the map object elements.
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟hardware</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (device hardware information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟vender</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Manufacturer
      </span><br/>
      <b>Default value: </b>"DELL"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟model</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Product number
      </span><br/>
      <b>Example: </b>"PowerEdge R450"<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>PowerEdge R250</code><br/>
      &ensp;• <code>PowerEdge R450</code><br/>
      &ensp;• <code>PowerEdge R650</code><br/>
      &ensp;• <code>PowerEdge R440</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟nic</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      NIC assembly description
      </span><br/>
      <b>Example: </b>"1 * 10Gbps + 1 * 40Gbps"<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>1 * 10Gbps</code><br/>
      &ensp;• <code>2 * 10Gbps</code><br/>
      &ensp;• <code>1 * 10Gbps + 1 * 40Gbps</code><br/>
      &ensp;• <code>1 * 10Gbps + 2 * 40Gbps</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟location</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (physical location of idc computer room)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟room</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Computer room
      </span><br/>
      <b>Example: </b>"F07-M"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟cabinet</td>
    <td>string</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      Cabinet
      </span><br/>
      <b>Default value: </b>null
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟u_tag</td>
    <td>string</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      U tag
      </span><br/>
      <b>Default value: </b>null
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟sys</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (system related information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟node</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Node role
      </span><br/>
      <b>Example: </b>"master"<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>master</code><br/>
      &ensp;• <code>standby</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟hostname</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Hostname
      </span><br/>
      <b>Example: </b>"CNPEK006-F07-M-R450-GW01"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 2em">∟network</td>
    <td>object{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Nested Object (network related information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟os</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (os ip related information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟ipaddr</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      OS ipv4 address
      </span><br/>
      <b>Example: </b>"10.96.0.2"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟netmask</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      OS ipv4 netmask
      </span><br/>
      <b>Example: </b>"255.255.255.248"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟gateway</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      OS ipv4 gateway
      </span><br/>
      <b>Example: </b>"10.96.0.1"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟bmc</td>
    <td>string{}</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Map Object (bmc ip related information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟ipaddr</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      BMC ipv4 address
      </span><br/>
      <b>Example: </b>"10.96.0.45"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟netmask</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      BMC ipv4 netmask
      </span><br/>
      <b>Example: </b>"255.255.255.224"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟gateway</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      BMC ipv4 gateway
      </span><br/>
      <b>Example: </b>"10.96.0.33"
    </td>
  </tr>
  <tr>
    <td style="padding-left: 4em">∟float</td>
    <td>string{}</td>
    <td>No</td>
    <td>
      <span style="color: DimGray;">
      Map Object (vip related information)
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟mounted</td>
    <td>boolean</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Whether to mount vip (by default it is mounted on the master role)
      </span><br/>
      <b>Example: </b>true<br/>
      <b>Enum values are: </b><br/>
      &ensp;• <code>true</code><br/>
      &ensp;• <code>false</code>
    </td>
  </tr>
  <tr>
    <td style="padding-left: 6em">∟ipaddr</td>
    <td>string</td>
    <td>Yes</td>
    <td>
      <span style="color: DimGray;">
      Float ipv4 address
      </span><br/>
      <b>Example: </b>"10.96.0.1"
    </td>
  </tr>
</tbody>
</table>

### Request body example

```json
{
  "project": {
    "id": "29",
    "name": "CNPEK006北京太古里三里屯盈科中心新建项目",
    "type": "construction",
    "desc": "无",
    "site": {
      "name": "盈科中心",
      "code": "CNPEK006",
      "count": 2748,
      "size": "medium"
    },
    "order": {
      "plat": "jira",
      "code": "IT-9828511",
      "url": "https://help.example.net/browse/IT-9828511"
    },
    "contact": {
      "delivery": {
        "name_en": "Hanchi Gu",
        "name_zh": "顾翰池",
        "email": "hanchi.gu@mail.com",
        "phone": "13340961855"
      },
      "pmo": {
        "name_en": "Xiaoyu",
        "name_zh": "萧羽",
        "email": "xiaoyu@mail.com",
        "phone": "13600894279"
      }
    },
    "date": {
      "expected": "2022-09-09",
      "deadline": "2022-09-23"
    }
  },
  "logistic": {
    "position": {
      "country": "中国大陆",
      "country_code": "CN",
      "province": "北京",
      "city": "北京市",
      "city_code": "PEK"
    },
    "address": "朝阳区工人体育场北路甲2号",
    "receiver": {
      "name": "孟嘉运",
      "phone": "18546842277"
    }
  },
  "devices": {
    "gateway": [
      {
        "hardware": {
          "vender": "DELL",
          "model": "PowerEdge R450",
          "nic": "1 * 10Gbps + 1 * 40Gbps"
        },
        "location": {
          "room": "F07-M",
          "cabinet": null,
          "u_tag": null
        },
        "sys": {
          "node": "master",
          "hostname": "CNPEK006-F07-M-R450-GW01"
        },
        "network": {
          "os": {
            "ipaddr": "10.96.0.2",
            "netmask": "255.255.255.248",
            "gateway": "10.96.0.1"
          },
          "bmc": {
            "ipaddr": "10.96.0.45",
            "netmask": "255.255.255.224",
            "gateway": "10.96.0.33"
          },
          "float": {
            "mounted": true,
            "ipaddr": "10.96.0.1"
          }
        }
      },
      {
        "hardware": {
          "vender": "DELL",
          "model": "PowerEdge R450",
          "nic": "2 * 10Gbps"
        },
        "location": {
          "room": "F07-M",
          "cabinet": null,
          "u_tag": null
        },
        "sys": {
          "node": "standby",
          "hostname": "CNPEK006-F07-M-R450-GW02"
        },
        "network": {
          "os": {
            "ipaddr": "10.96.0.3",
            "netmask": "255.255.255.248",
            "gateway": "10.96.0.1"
          },
          "bmc": {
            "ipaddr": "10.96.0.46",
            "netmask": "255.255.255.224",
            "gateway": "10.96.0.33"
          },
          "float": {
            "mounted": false,
            "ipaddr": "10.96.0.1"
          }
        }
      }
    ],
    "dnss": [],
    "nss": [
      {
        "hardware": {
          "vender": "DELL",
          "model": "PowerEdge R450",
          "nic": "1 * 10Gbps + 2 * 40Gbps"
        },
        "location": {
          "room": "F07-M",
          "cabinet": null,
          "u_tag": null
        },
        "sys": {
          "node": "master",
          "hostname": "CNPEK006-F07-M-R450-NSS01"
        },
        "network": {
          "os": {
            "ipaddr": "10.74.0.44",
            "netmask": "255.255.255.248",
            "gateway": "10.74.0.33"
          },
          "bmc": {
            "ipaddr": "10.74.0.45",
            "netmask": "255.255.255.224",
            "gateway": "10.74.0.33"
          }
        }
      }
    ]
  }
}
```

## Response

### Response body

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 25%;">Parameter</th>
    <th style="width: 25%;">Type</th>
    <th style="width: calc(740px/2);">Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>code</td>
    <td>number</td>
    <td>
      <span style="color: DimGray;">
      Error code, non-0 means failure.
      </span><br/>
      <b>Example: </b>0
    </td>
  </tr>
  <tr>
    <td>message</td>
    <td>string</td>
    <td>
      <span style="color: DimGray;">
      Error description. <br/>
      It can't be used as an sign of whether the request was successful or not.
      </span><br/>
      <b>Example: </b>"success"
    </td>
  </tr>
  <tr>
    <td>data</td>
    <td>-</td>
    <td>
      <span style="color: DimGray;">-</span>
    </td>
  </tr>
</tbody>
</table>

### Response body example

```json
{
  "code": 0,
  "message": "success",
  "data": null
}
```

## Error code

<table style="font-family: Arial, sans-serif; font-size: 12px; line-height: 20px;">
<thead>
  <tr>
    <th style="width: 18%;">HTTP status code</th>
    <th style="width: 15%;">Error code</th>
    <th style="width: calc(740px/3);">Description</th>
    <th style="width: auto;">Troubleshooting suggestions</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>400</td>
    <td>40000</td>
    <td>request body error</td>
    <td>Check the data validity of each field of the request body.</td>
  </tr>
  <tr>
    <td>400</td>
    <td>44001</td>
    <td>Value already exists, duplicate creation is not allowed</td>
    <td>Check if the projectid is duplicated, please contact me if you must use this value.</td>
  </tr>
</tbody>
</table>

<div class="Copyright" style="margin-top:100px; font-size: 12px; height: 20px; line-height: 20px; background: none;">
  <!--使用flex布局，文本垂直居中-->
  <div style="display: flex; flex-direction: row; justify-content: space-between;">
    <a href="https://open.feishu.cn/" style="text-decoration: none;">
      <span style="color: CadetBlue;">Refer to Feishu Open Platform</span>
    </a>
    <span style="color: #666666; font-size: 12px;">@&nbsp;Pokeya</span>
  </div>
</div>
