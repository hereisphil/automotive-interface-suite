import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import {
    VehicleState,
    ControlInput,
    EnvironmentUpdate,
    ClientType,
} from "@automotive/shared-types";
