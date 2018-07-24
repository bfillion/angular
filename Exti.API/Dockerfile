FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY Exti.API/Exti.API.csproj Exti.API/
RUN dotnet restore Exti.API/Exti.API.csproj
COPY . .
WORKDIR /src/Exti.API
RUN dotnet build Exti.API.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Exti.API.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Exti.API.dll"]
