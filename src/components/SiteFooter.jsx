import { Box, Divider, Link, Stack, Typography } from "@mui/material";

function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        background: "#1a181c",
        px: "5%",
        py: "1.6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 1.5,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.25)",
          fontWeight: 300,
          fontSize: "0.8rem",
        }}
      >
        © 2026{" "}
        <Box component="span" sx={{ color: "#e8b4c2" }}>
          Daně bez starostí
        </Box>{" "}
        · Ing. Ivana Petrovická · Daňový poradce č. 4625
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1.2}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.2)",
            fontSize: "0.75rem",
            fontWeight: 300,
          }}
        >
          Tvorba webu
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "rgba(255,255,255,0.12)" }}
        />
        <Link
          href="https://s-weby.cz"
          target="_blank"
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
            fontWeight: 500,
            transition: "color 0.2s",
            "&:hover": { color: "rgba(255,255,255,0.85)" },
            "&:hover img": { opacity: 1 },
          }}
        >
          <Box
            component="img"
            src="/img/sweby_logo.png"
            alt="S-weby"
            sx={{
              width: 18,
              height: 18,
              objectFit: "contain",
              mixBlendMode: "screen",
              opacity: 0.8,
              transition: "opacity 0.2s",
            }}
          />
          Ing. Lucie Nováková
        </Link>
      </Stack>
    </Box>
  );
}

export default SiteFooter;
