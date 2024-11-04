import { Box, Paper, Typography } from "@mui/material";
import { KeyboardArrowRightOutlined, ExpandMore } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Link = ({
  tilte,
  subtitle,
  list1,
  list2,
  list3,

  title2,
  Gadget1,
  Gadget2,
  Gadget3,

  Grocery,
  Grocery1,
  Grocery2,
  Grocery3,

  Fashion,
  Fashion1,
  Fashion2,
  Fashion3,

   Store,

   Health
}) => {
  return (
    <Box
      sx={{
        ":hover": { ".paper": { display: "block" } },
        display: "flex",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Typography variant="body1">{tilte}</Typography>

      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="paper"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          transform: "translateX(-50%)",
          left: "50%",
          display: "none",
          cursor: "pointer",
          zIndex:2,

        }}
      >
        <Paper
          sx={{
            mt: 2,
            cursor: "pointer",
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem
                sx={{
                  ":hover .paper2": {
                    display: "block",
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                    position: "relative",
                  }}
                >
                  <ListItemText
                    className="text"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary={subtitle}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="smal" />
                </ListItemButton>

                <Box
                  className="paper2"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: 0,
                    display: "none",
                  }}
                >
                  <Paper
                    sx={{
                      ml: 1,
                      minWidth: 140,
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={list1}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={list2}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={list3}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .paper2": {
                    display: "block",
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                    position: "relative",
                  }}
                >
                  <ListItemText
                    className="text"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary={title2}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="smal" />
                </ListItemButton>

                <Box
                  className="paper2"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: 0,
                    display: "none",
                  }}
                >
                  <Paper
                    sx={{
                      ml: 1,
                      minWidth: 140,
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Gadget1}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Gadget2}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Gadget3}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .paper2": {
                    display: "block",
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                    position: "relative",
                  }}
                >
                  <ListItemText
                    className="text"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary={Grocery}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="smal" />
                </ListItemButton>

                <Box
                  className="paper2"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: 0,
                    display: "none",
                  }}
                >
                  <Paper
                    sx={{
                      ml: 1,
                      minWidth: 140,
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Grocery1}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Grocery2}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Grocery3}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem
                sx={{
                  ":hover .paper2": {
                    display: "block",
                  },
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                    position: "relative",
                  }}
                >
                  <ListItemText
                    className="text"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 100,
                      },
                    }}
                    primary={Fashion}
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="smal" />
                </ListItemButton>

                <Box
                  className="paper2"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: 0,
                    display: "none",
                  }}
                >
                  <Paper
                    sx={{
                      ml: 1,
                      minWidth: 140,
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Fashion1}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Fashion2}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              className="text"
                              sx={{
                                "&  .MuiTypography-root": {
                                  fontSize: "15px",
                                  fontWeight: 300,
                                },
                              }}
                              primary={Fashion3}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>








              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    className="text"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary={Store}
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1.5,
                  }}
                >
                  <ListItemText
                    className="text"
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: 300,
                      },
                    }}
                    primary={Health}
                  />
                  <Box flexGrow={1} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Link;
