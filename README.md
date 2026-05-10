# packe-catch

`packe-catch` is a small Node.js utility for capturing packets on the network
device selected by the `cap` library and printing basic Ethernet and IP
address information.

## Why use packe-catch?

- See packet sizes and whether captured packets were truncated.
- Display source and destination MAC addresses for Ethernet frames.
- Display source and destination addresses for IPv4 and IPv6 packets.
- Keep the example lightweight and easy to extend for authorized network
  diagnostics or learning about packet decoding.

The app does not decode packet payloads, report transport-layer ports, or
provide a command-line option to select a device. Captured traffic depends on
the selected device and what that device can observe.

> **Use responsibly:** Capture traffic only on devices and networks you own
> or are explicitly authorized to monitor, and follow applicable laws and
> organizational policies.

## Getting started

### Prerequisites

- Node.js
- pnpm 12.16 or a compatible version
- The packet-capture driver or library required by `cap` for your operating
  system (for example, Npcap on Windows)
- Permission for your operating system to capture traffic on the chosen
  network device

Native dependency setup can vary by operating system. Consult the
[`cap` package documentation](https://www.npmjs.com/package/cap) if its
installation requires additional platform-specific dependencies.

### Install

```sh
git clone https://github.com/ak-ghosh/packe-catch.git
cd packe-catch
pnpm install
```

### Run

```sh
pnpm dev
```

The program asks `cap` to choose a device, then prints packet size and
truncation status for received packets. For Ethernet frames it also prints MAC
addresses, and for IPv4 or IPv6 packets it prints IP addresses. Stop the
process with `Ctrl+C`.

## Help and documentation

- Report a bug or ask a question in [GitHub Issues](https://github.com/ak-ghosh/packe-catch/issues).
- See the [`cap` package documentation](https://www.npmjs.com/package/cap) for
  capture setup and platform requirements.

## Maintainers and contributing

The package metadata lists **Akshar Ghosh** as the author. Contributions are
welcome: open an issue to discuss a change, or submit a pull request with a
focused description of what changed and how it was checked.

There is currently no separate contribution guide or automated test suite.
